import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import { List, Datagrid, Edit, DateField, RichTextField, Create, NumberInput, Show, SimpleShowLayout, SimpleForm, TextField, EditButton, TextInput, DateInput, NumberField } from 'react-admin';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
export const ArticleIcon = MenuBookRoundedIcon;

export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <NumberField source="timeRead" />
            <TextField source="snippet" />
            <TextField source="likes" />
            <EditButton basePath="/articles" />
        </Datagrid>
    </List>
);

const ArticleTitle = ({ record }) => {
    return <span>Article {record ? `"${record.title}"` : ''}</span>;
};

export const ArticleEdit = (props) => (
    <Edit title={<ArticleTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="cover" title="Restaurant's cover" />
            <TextInput source="title" />
            <TextInput source="snippet" />
            <RichTextInput source="body" />
            <TextInput source="authorProfilePicture" />
            <TextInput source="author" />
            <NumberInput disabled source="likes" />
            <NumberInput source="timeRead" />
            <DateInput source="published_at" />
            <DateInput source="publicationDate" />
        </SimpleForm>
    </Edit>
);

export const ArticleCreate = (props) => (   
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="cover" title="Restaurant's cover" />
            <TextInput source="title" />
            <TextInput source="snippet" />
            <RichTextInput source="body" />
            <TextInput source="authorProfilePicture" />
            <TextInput source="author" />
            <NumberInput disabled source="likes" />
            <NumberInput source="timeRead" />
            <DateInput source="published_at" />
            <DateInput source="publicationDate" />
        </SimpleForm>
    </Create>
);

export const ArticleShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField disabled source="id" />
            <TextField source="cover" title="Article's cover" />
            <TextField source="title" />
            <TextField source="snippet" />
            <RichTextField source="body" />
            <TextField source="authorProfilePicture" />
            <TextField source="author" />
            <NumberField source="likes" />
            <NumberField source="timeRead" />
            <DateField source="published_at" />
            <DateField source="publicationDate" />
        </SimpleShowLayout>
    </Show>
);