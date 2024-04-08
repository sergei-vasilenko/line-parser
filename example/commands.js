export const commands = [
  {
    command: "/userscount",
    description: "Number of marathon participants (all | active | completed)",
    role: "admin",
    signature: "command_name:cmd type:str",
    handler: async ({ args, chat_id }) => {
      const count = await appStore.getUsersCount(args.type);
      const message = `${count} ${
        count > 1 ? "participants" : "participant"
      } took part in the marathon`;
      await bot.send("text", chat_id, message);
    },
  },
  {
    command: "/sendnewsletter",
    description: "Send newsletter",
    role: "admin",
    signature: "command_name:cmd text:str",
    handler: async ({ args }) => {
      const chatIdsList = await appStore.getUserChatIdsList();
      bot.sendNewsLetter(chatIdsList, args.text);
    },
  },
  {
    command: "/userdetails",
    description: "User info",
    role: "admin",
    signature: "command_name:cmd chat_id:int",
    handler: async ({ args, chat_id }) => {
      const user = await appStore.getUserDetails(args.chat_id);
      await bot.sendUserDetails(chat_id, user);
    },
  },
];

export const signatures = commands.reduce(
  (result, cmd) => {
    if (cmd.signature) {
      result[cmd.command] = cmd.signature;
    }
    return result;
  },
  { ...actionsSignature }
);
