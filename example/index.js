import LineParser from "../parser.impl.js";
import lecsicalRules from "./lecsical.rules.js";
import { signatures } from "./commands.js";

const usersCountLine = "/userscount all";
const sendNewsletterLine =
  "/sendnewsletter A new marathon will start soon. Join us!";
const userInfoLine = "/userdetails 10";

const parser = new LineParser(lecsicalRules, signatures);
parser.getArgs(usersCountLine); // { command_name: '/userscount', type: 'all' };
parser.getArgs(sendNewsletterLine); // { command_name: '/sendnewsletter', text: 'A new marathon will start soon. Join us!' };
parser.getArgs(userInfoLine); // { command_name: '/userdetails', chat_id: 10 };
