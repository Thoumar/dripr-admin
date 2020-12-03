import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import { SelectArrayInput, RichTextField, ImageField, List, NumberField, SingleFieldList, ChipField, Datagrid, ArrayField, Edit, Create, Show, SimpleShowLayout, DateField, TextField, SimpleForm, EditButton, TextInput, DateInput, BooleanField, BooleanInput, NumberInput, ShowButton } from 'react-admin';
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
            <TextInput source="cover" />
            {/* <ImageInput source="cover" label="Cover picture" accept="image/*">
                <ImageField source="cover" title="title" />
            </ImageInput> */}
            <TextInput source="short" />
            <RichTextInput source="description" />
            <DateInput source="lastupdate" />
            <NumberInput source="latitude" />
            <NumberInput source="longitude" />
            <TextInput source="phoneNumber" />
            <TextInput source="website" />
            <BooleanInput source="isVerified" />
            <SelectArrayInput label="Tags" source="tags" choices={[
                { id: 'to_try', name: 'A tester' },
                { id: 'popular', name: 'Populaire' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const PlaceCreate = (props) => (
    <Create title="Create a Place" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" />
            <TextInput source="cover" />
            <TextInput source="short" />
            <RichTextInput source="description" />
            <DateInput source="lastupdate" />
            <NumberInput source="latitude" />
            <NumberInput source="longitude" />
            <TextInput source="phoneNumber" />
            <TextInput source="website" />
            <BooleanInput source="isVerified" />
            <SelectArrayInput label="Tags" source="tags" choices={[
                { id: 'to_try', name: 'A tester' },
                { id: 'popular', name: 'Populaire' },
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
            <ImageField source="cover" />
            <TextField source="short" />
            <RichTextField  source="description" />
            <DateField source="lastupdate" />
            <NumberField source="latitude" />
            <NumberField source="longitude" />
            <TextField source="phoneNumber" />
            <TextField source="website" />
            <BooleanField source="isVerified" />
            <ArrayField source="tags">
                <SingleFieldList>
                    <ChipField source="tags" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);