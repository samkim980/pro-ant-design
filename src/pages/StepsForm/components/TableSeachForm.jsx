import { ProFormText, QueryFilter } from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import { Button, Form, Input } from 'antd';
export default function TableSearchForm() {
  const form = (
    <QueryFilter
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormText name="name" label="user name" />
      <ProFormText name="dob" label="age" />
    </QueryFilter>
  );
  const columns = [
    {
      title: 'Name',
      search: false,
    },
    {
      title: 'Age',
      search: false,
    },
    {
      title: 'Country',
      search: false,
    },
  ];
  return (
    <ProTable
      columns={columns}
      search={{
        optionRender: (searchConfig, formProps, dom) => [form],
      }}
    />
  );
}
