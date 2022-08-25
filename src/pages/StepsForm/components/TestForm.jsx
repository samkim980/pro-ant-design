import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useRef } from 'react';
import { useState } from 'react';
import ProFormInstance from '@ant-design/pro-form';

export default function TestForm() {
  const formRef = useRef(ProFormInstance);
  const onFinish = (values) => {
    console.log(values);
  };
  const [secondN, setSecondName] = useState();

  console.log(formRef.current);
  return (
    <ProForm
      formRef={formRef}
      onFinish={(values) => console.log(values)}
      defaultValue={{
        secondName: secondN,
      }}
    >
      <ProFormText
        name="name"
        label="User Name"
        fieldProps={{
          onChange: (event) => {
            setSecondName(event.target.value);
            formRef.current.setFieldsValue({ secondName: event.target.value });
          },
        }}
      />
      <ProFormText name="secondName" label="User Second Name" />
    </ProForm>
  );
}
