import Resolver from "@forge/resolver";
import { storage } from "@forge/api";
const resolver = new Resolver();
const getUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

// placeholder
resolver.define("exampleFunctionKey", ({ payload, context }) => {
  return { example: `Hello, ${payload.name}!` };
});

// CRUD operations for todo app
const getListKeyFromContext = (context) => {
  console.log(context);
  const { localId: id } = context;
  return id.split("/")[id.split("/").length - 1];
};

const getAll = async (listId) => {
  return (await storage.get(listId)) || [];
};

// Define resolver functions
resolver.define("get-all", async ({ context }) => {
  return await getAll(getListKeyFromContext(context));
});

resolver.define("create", async ({ payload, context }) => {
  const listId = getListKeyFromContext(context);
  const records = await getAll(listId);
  const id = getUniqueId();

  const newRecord = {
    id,
    ...payload,
  };

  await storage.set(listId, [...records, newRecord]);

  return newRecord;
});

resolver.define("update", async ({ payload, context }) => {
  const listId = getListKeyFromContext(context);
  let records = await getAll(listId);

  records = records.map((item) => {
    if (item.id === payload.id) {
      return payload;
    }
    return item;
  });

  await storage.set(listId, records);

  return payload;
});

resolver.define("delete", async ({ payload, context }) => {
  const listId = getListKeyFromContext(context);
  let records = await getAll(listId);

  records = records.filter((item) => item.id !== payload.id);

  await storage.set(listId, records);

  return payload;
});

resolver.define("delete-all", async ({ context }) => {
  return await storage.set(getListKeyFromContext(context), []);
});

// export
export const handler = resolver.getDefinitions();
