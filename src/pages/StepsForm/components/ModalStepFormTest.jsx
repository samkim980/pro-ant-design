import { ProFormDatePicker, ProFormText, StepsForm } from '@ant-design/pro-form';
import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function ModalStepsFormTest() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Form</Button>

      <StepsForm
        current={current}
        onCurrentChange={(e) => {
          setCurrent(e);
        }}
        onFormChange={(e1, e2) => console.log(e2)}
        onFinish={(e) => {
          console.log(e);
          setCurrent(-1);
          return Promise.resolve(true);
        }}
        stepsFormRender={(dom, submitter) => {
          return (
            <Modal
              title="Random Step Form"
              width={800}
              onCancel={() => {
                setCurrent(0);
                setVisible(false);
              }}
              visible={visible}
              footer={submitter}
              destroyOnClose={true}
            >
              {dom}
            </Modal>
          );
        }}
      >
        <StepsForm.StepForm title="Personal Details">
          <ProFormText name="name" width="md" label="Name" placeholder="Enter your name..." />
          <ProFormDatePicker name="date" label="Date of Birth" />
        </StepsForm.StepForm>
        <StepsForm.StepForm title="Other Information">
          <ProFormText
            name="employer"
            width="md"
            label="Employer Name"
            placeholder="Enter your employers name..."
          />
          <ProFormDatePicker name="date" label="Date of Admission" />
        </StepsForm.StepForm>
        <StepsForm.StepForm title="Place of Residence">
          <ProFormText
            name="address"
            width="md"
            label="Home Address"
            placeholder="Enter your address..."
          />
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
}
