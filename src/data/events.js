import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import { SelectArrayInput, ImageInput, RichTextField, ImageField, List, NumberField, SingleFieldList, ChipField, Datagrid, ArrayField, Edit, Create, Show, SimpleShowLayout, DateField, TextField, SimpleForm, EditButton, TextInput, DateInput, BooleanField, BooleanInput, NumberInput, ShowButton } from 'react-admin';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
export const EventIcon = DateRangeOutlinedIcon;

export const EventList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <ShowButton basePath="/events" />
            <EditButton basePath="/events" />
        </Datagrid>
    </List>
);

const EventTitle = ({ record }) => {
    return <span>Event {record ? `"${record.title}"` : ''}</span>;
};

export const EventEdit = (props) => (
    <Edit title={<EventTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = (props) => (
    <Create title="Create a Event" {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);


export const EventShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField disabled source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);