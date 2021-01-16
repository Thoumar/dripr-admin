import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import { List, Datagrid, ImageInput, ImageField, ChipField, SingleFieldList, SelectArrayInput, ArrayField, Edit, DateField, RichTextField, Create, NumberInput, Show, SimpleShowLayout, SimpleForm, TextField, EditButton, TextInput, DateInput, NumberField } from 'react-admin';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
export const ArticleIcon = MenuBookRoundedIcon;

export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <NumberField source="timeRead" />
            <TextField source="snippet" />
            <TextField source="likes" />
            <TextField source="label" />
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
            <ImageInput source="cover" label="Cover picture" accept="image/*" placeholder={<p>Drop your file here</p>} multiple={false}>
                <ImageField source="src" />
            </ImageInput>
            <TextInput source="title" />
            <TextInput source="snippet" />
            <RichTextInput source="body" />
            <TextInput source="authorProfilePicture" />
            <TextInput source="author" />
            <NumberInput disabled source="likes" />
            <NumberInput source="timeRead" />
            <SelectArrayInput label="Label" source="labels" choices={[
                { id: 'info', name: 'Informations' },
                { id: 'tutorial', name: 'Tutorial' },
                { id: 'tip', name: 'Conseils' },
                { id: 'reommandation', name: 'Recommandation' },
                { id: 'partnership', name: 'Paternariat' },
                { id: 'anoncement', name: 'Annonce' },
                { id: 'update', name: 'Mise à jour' },
            ]} />
            <DateInput source="published_at" />
            <DateInput source="publicationDate" />
        </SimpleForm>
    </Edit>
);

export const ArticleCreate = (props) => (   
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <ImageInput source="cover" label="Cover picture" accept="image/*" placeholder={<p>Drop your file here</p>}  multiple={false}>
                <ImageField source="src" />
            </ImageInput>
            <TextInput source="title" />
            <TextInput source="snippet" />
            <RichTextInput source="body" />
            <TextInput source="authorProfilePicture" />
            <TextInput source="author" />
            <NumberInput disabled source="likes" />
            <NumberInput source="timeRead" />
            <SelectArrayInput label="Label" source="labels" choices={[
                { id: 'info', name: 'Informations' },
                { id: 'tutorial', name: 'Tutorial' },
                { id: 'tip', name: 'Conseils' },
                { id: 'reommandation', name: 'Recommandation' },
                { id: 'partnership', name: 'Paternariat' },
                { id: 'anoncement', name: 'Annonce' },
                { id: 'update', name: 'Mise à jour' },
            ]} />
            <DateInput source="published_at" />
            <DateInput source="publicationDate" />
        </SimpleForm>
    </Create>
);

export const ArticleShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField disabled source="id" />
            <ImageField source="cover" />
            <TextField source="title" />
            <TextField source="snippet" />
            <RichTextField source="body" />
            <TextField source="authorProfilePicture" />
            <TextField source="author" />
            <NumberField source="likes" />
            <NumberField source="timeRead" />
            <ArrayField source="labels">
                <SingleFieldList>
                    <ChipField source="labels" />
                </SingleFieldList>
            </ArrayField>
            <DateField source="published_at" />
            <DateField source="publicationDate" />
        </SimpleShowLayout>
    </Show>
);