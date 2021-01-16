import * as React from "react";
import { List, Datagrid, Edit, Create, Show, SimpleShowLayout, TextField, SimpleForm, EditButton, ShowButton, TextInput } from 'react-admin';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
export const UserIcon = GroupRoundedIcon;

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <TextField source="email" />
            <TextField source="bio" />
            <ShowButton basePath="/users" />
            <EditButton basePath="/users" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.email}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="email" />
            <TextInput source="bio" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create a User" {...props}>
        <SimpleForm>
            <TextField disabled source="id" />
            <TextInput source="name" />
            <TextInput source="lastname" />
            <TextInput source="email" />
            <TextInput source="bio" />
        </SimpleForm>
    </Create>
);


export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField disabled source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);