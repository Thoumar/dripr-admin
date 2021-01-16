import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import { SelectArrayInput, ImageInput, RichTextField, ImageField, List, NumberField, SingleFieldList, ChipField, Datagrid, ArrayField, Edit, Create, Show, SimpleShowLayout, DateField, TextField, SimpleForm, EditButton, TextInput, DateInput, BooleanField, BooleanInput, NumberInput, ShowButton } from 'react-admin';
import PlaceRoundedIcon from '@material-ui/icons/PlaceRounded';
export const PlaceIcon = PlaceRoundedIcon;

export const PlaceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="short" />
            <ShowButton basePath="/places" />
            <EditButton basePath="/places" />
        </Datagrid>
    </List>
);

const PlaceTitle = ({ record }) => {
    return <span>Place {record ? `"${record.title}"` : ''}</span>;
};

export const PlaceEdit = (props) => (
    <Edit title={<PlaceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="address" />
            <ImageInput multiple={true} source="pictures" label="Cover pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" />
            </ImageInput>
            <TextInput source="short" />
            <RichTextInput source="description" />
            <DateInput source="lastupdate" />
            <NumberInput source="latitude" />
            <NumberInput source="longitude" />
            <TextInput source="phoneNumber" />
            <TextInput source="website" />
            <BooleanInput source="isVerified" />
            <SelectArrayInput label="Tags" source="scopes" choices={[
                { id: 'to_try', name: 'A tester' },
                { id: 'popular', name: 'Populaire' },
                { id: 'map', name: 'Carte' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const PlaceCreate = (props) => (
    <Create title="Create a Place" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" />
            <ImageInput multiple={true} source="pictures" label="Cover pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="short" />
            <RichTextInput source="description" />
            <DateInput source="lastupdate" />
            <NumberInput source="latitude" />
            <NumberInput source="longitude" />
            <TextInput source="phoneNumber" />
            <TextInput source="website" />
            <BooleanInput source="isVerified" />
            <SelectArrayInput label="Tags" source="scopes" choices={[
                { id: 'to_try', name: 'A tester' },
                { id: 'popular', name: 'Populaire' },
                { id: 'map', name: 'Carte' },
            ]} />
        </SimpleForm>
    </Create>
);


export const PlaceShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField disabled source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <ImageField multiple={true} source="pictures" label="Cover pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" />
            </ImageField>
            <TextField source="short" />
            <RichTextField  source="description" />
            <DateField source="lastupdate" />
            <NumberField source="latitude" />
            <NumberField source="longitude" />
            <TextField source="phoneNumber" />
            <TextField source="website" />
            <BooleanField source="isVerified" />
            <ArrayField source="scopes">
                <SingleFieldList>
                    <ChipField source="scopes" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);