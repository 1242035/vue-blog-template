import Parse from 'parse';
import { config } from './config';

Parse.initialize(config.__API_SERVER_KEY__);
Parse.serverURL = config.__API_SERVER_URL__;