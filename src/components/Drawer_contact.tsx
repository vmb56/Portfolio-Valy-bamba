// src/components/ContactDrawer.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Flex,
  ConfigProvider,
  theme,
  Alert,
  Modal, // <-- Modal AntD
} from 'antd';
import type { FormProps } from 'antd';
import emailjs from '@emailjs/browser';

const { TextArea } = Input;

type ContactDrawerProps = {
  triggerLabel?: React.ReactNode;
  triggerClassName?: string;
  width?: number;
  dark?: boolean;
  /** durée d’affichage des alertes (ms) */
  alertDurationMs?: number;
};

type FormValues = {
  name: string;
  email: string;
  description: string;
};

// Variables d'environnement (Vite)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const TO_EMAIL =
  (import.meta.env.VITE_TO_EMAIL as string | undefined) || 'valybamba56@gmail.com';

// petit utilitaire pour afficher/masquer automatiquement une alerte
function useTimedAlert<
  T extends { type: 'success' | 'error' | 'warning'; message: string; description?: string }
>(defaultMs = 4000) {
  const [alert, setAlert] = useState<T | null>(null);
  const timerRef = useRef<number | null>(null);

  const show = (data: T, ms = defaultMs) => {
    setAlert(data);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setAlert(null);
      timerRef.current = null;
    }, ms);
  };

  const clear = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
    setAlert(null);
  };

  useEffect(() => () => clear(), []);

  return { alert, show, clear };
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({
  triggerLabel = 'Me contacter',
  triggerClassName,
  width = 640,
  dark = true,
  alertDurationMs = 4000,
}) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false); // <-- état du modal de confirmation
  const [form] = Form.useForm<FormValues>();

  // Alertes : externe (hors Drawer) & interne (dans Drawer)
  const globalAlerts = useTimedAlert<{
    type: 'success' | 'error';
    message: string;
    description?: string;
  }>(alertDurationMs);

  const internalAlerts = useTimedAlert<{
    type: 'warning' | 'error';
    message: string;
    description?: string;
  }>(alertDurationMs);

  // Init EmailJS une seule fois
  const inited = useRef(false);
  useEffect(() => {
    if (!inited.current && PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
      inited.current = true;
    }
  }, []);

  const ensureEnv = (): boolean => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      internalAlerts.show({
        type: 'error',
        message: '⚠️ Configuration EmailJS manquante.',
        description:
          'Vérifie ton .env (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY) puis redémarre Vite.',
      });
      return false;
    }
    return true;
  };

  const sendMail = async (values: FormValues) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.description,
      to_email: TO_EMAIL,
      reply_to: values.email,
      from_name: values.name,
    };
    return emailjs.send(SERVICE_ID!, TEMPLATE_ID!, templateParams);
  };

  // Soumission (envoi) après confirmation
  const onFinish: FormProps<FormValues>['onFinish'] = async (values) => {
    if (!ensureEnv()) return;
    try {
      setSubmitting(true);
      await sendMail(values);

      setOpen(false);
      setConfirmOpen(false);
      form.resetFields();

      globalAlerts.show({
        type: 'success',
        message: '✅ Message envoyé avec succès !',
        description: 'Merci, je vous répondrai dès que possible.',
      });
    } catch (err) {
      globalAlerts.show({
        type: 'error',
        message: '❌ Échec de l’envoi',
        description: 'Vérifiez votre connexion et réessayez.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Validation échouée
  const onFinishFailed: FormProps<FormValues>['onFinishFailed'] = () => {
    internalAlerts.show({
      type: 'warning',
      message: '⚠️ Champs manquants',
      description: 'Merci de compléter tous les champs requis avant d’envoyer.',
    });
  };

  // Clique sur le bouton "Envoyer" (footer du Drawer) → on valide d’abord, puis on ouvre le modal
  const handleAskConfirm = async () => {
    try {
      await form.validateFields(); // si ok → on ouvre le modal
      setConfirmOpen(true);
    } catch {
      // antd affichera déjà les erreurs champ par champ + on met un warning interne
      internalAlerts.show({
        type: 'warning',
        message: '⚠️ Champs manquants',
        description: 'Merci de compléter tous les champs requis avant d’envoyer.',
      });
    }
  };

  const currentValues = form.getFieldsValue(); // pour récapitulatif dans le modal

  const content = (
    <>
      <Drawer
        title="Me contacter"
        width={width}
        onClose={() => setOpen(false)}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        rootClassName="!text-slate-900 dark:!text-slate-100"
        headerStyle={{ borderBottom: '1px solid rgba(207, 211, 214, 0.08)' }}
        footer={
          <Flex justify="end" gap={8}>
            <Button onClick={() => setOpen(false)} disabled={submitting}>
              Annuler
            </Button>
            <Button type="primary" onClick={handleAskConfirm} loading={submitting}>
              Envoyer
            </Button>
          </Flex>
        }
      >
        {/* Alerte interne (top center dans le Drawer) */}
        {internalAlerts.alert && (
          <div className="sticky top-16 z-10 mb-4 flex justify-center">
            <div className="w-full max-w-md">
              <Alert
                message={internalAlerts.alert.message}
                description={internalAlerts.alert.description}
                type={internalAlerts.alert.type}
                showIcon
                closable
                onClose={internalAlerts.clear}
              />
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
          <Form<FormValues>
            layout="vertical"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            requiredMark="optional"
            validateMessages={{
              required: 'Ce champ est requis',
              types: { email: 'E-mail invalide' },
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Nom" name="name" rules={[{ required: true }]}>
                  <Input placeholder="Ex: Jean Dupont" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Adresse e-mail"
                  name="email"
                  rules={[{ required: true }, { type: 'email' }]}
                >
                  <Input placeholder="exemple@mail.com" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Description / Message"
              name="description"
              rules={[{ required: true }]}
            >
              <TextArea rows={5} placeholder="Parlez-moi de votre projet…" />
            </Form.Item>
          </Form>
        </div>
      </Drawer>

      {/* Modal de confirmation */}
      <Modal
        title="Confirmer l’envoi ?"
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onOk={() => form.submit()} // déclenche onFinish si tout est valide
        okText="Envoyer"
        cancelText="Annuler"
        confirmLoading={submitting}
        centered
      >
        <div className="space-y-2 text-sm">
          <p>Veuillez confirmer l’envoi du message avec les informations suivantes :</p>
          <p><span className="font-semibold">Nom : </span>{currentValues?.name || '-'}</p>
          <p><span className="font-semibold">Email : </span>{currentValues?.email || '-'}</p>
          <div>
            <span className="font-semibold">Message :</span>
            <div className="mt-1 max-h-40 overflow-auto rounded border border-slate-200 p-2 dark:border-slate-700">
              {currentValues?.description || '-'}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );

  return (
    <>
      {/* Alerte globale FIXE en haut au milieu */}
      {globalAlerts.alert && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
          <Alert
            message={globalAlerts.alert.message}
            description={globalAlerts.alert.description}
            type={globalAlerts.alert.type}
            showIcon
            closable
            onClose={globalAlerts.clear}
            className="shadow-lg"
          />
        </div>
      )}

      {/* Bouton déclencheur */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          'inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800'
        }
      >
        {triggerLabel}
      </button>

      {/* Drawer dark mode via ConfigProvider */}
      {dark ? (
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorBgElevated: '#0d0d0eff',
              colorText: '#e2e8f0',
              colorPrimary: '#6366f1',
              borderRadiusLG: 16,
            },
          }}
        >
          {content}
        </ConfigProvider>
      ) : (
        content
      )}
    </>
  );
};

export default ContactDrawer;
