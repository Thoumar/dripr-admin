import * as React from "react";
import { Admin, Resource } from 'react-admin';

import {
  EventList,
  EventEdit,
  EventCreate,
  EventShow,
  EventIcon
} from './data/events';

import {
  ArticleList,
  ArticleEdit,
  ArticleCreate,
  ArticleShow,
  ArticleIcon
} from './data/articles';

import {
  PlaceList,
  PlaceEdit,
  PlaceCreate,
  PlaceShow,
  PlaceIcon
} from './data/places';

import {
  UserList,
  UserEdit,
  UserCreate,
  UserShow,
  UserIcon
} from './data/users';

import {
  FirebaseDataProvider
} from 'react-admin-firebase';

const config = {
  apiKey: "AIzaSyDIglGrfnOYyy1pPsKhjTdcna4fFeCkKqk",
  authDomain: "dripr-bdaa1.firebaseapp.com",
  databaseURL: "https://dripr-bdaa1.firebaseio.com",
  projectId: "dripr-bdaa1",
  storageBucket: "dripr-bdaa1.appspot.com",
  messagingSenderId: "91504863368",
  appId: "1:91504863368:web:1bcfa7ed333ce971ce173d",
  measurementId: "G-QRJ08J1KSN"
};

const options = {};
const dataProvider = FirebaseDataProvider(config, options);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      icon={UserIcon}
      list={UserList}
      show={UserShow}
      create={UserCreate}
      edit={UserEdit} />
    <Resource
      name="events"
      icon={EventIcon}
      list={EventList}
      show={EventShow}
      create={EventCreate}
      edit={EventEdit} />
    <Resource
      name="articles"
      icon={ArticleIcon}
      list={ArticleList}
      show={ArticleShow}
      create={ArticleCreate}
      edit={ArticleEdit} />
    <Resource
      name="places"
      icon={PlaceIcon}
      list={PlaceList}
      show={PlaceShow}
      create={PlaceCreate}
      edit={PlaceEdit} />
  </Admin>
);
export default App;