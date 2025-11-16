import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Button from '../components/PrimaryButton/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    variant: { control: { type: 'select', options: ['soft', 'elevated', 'dark'] } },
    title: { control: 'text' },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(args.isOpen);

  return (
    <>
      <Button text="Open Modal" onClick={() => setOpen(true)} />
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
        <p>{args.children || "This is a sample modal content 💖"}</p>
      </Modal>
    </>
  );
};

export const SoftModal = Template.bind({});
SoftModal.args = { variant: 'soft', title: 'Soft Modal 🌷' };

export const ElevatedModal = Template.bind({});
ElevatedModal.args = { variant: 'elevated', title: 'Elevated Modal 💼' };

export const DarkModal = Template.bind({});
DarkModal.args = { variant: 'dark', title: 'Dark Modal 🌙' };
