import { account, appwriteConfig, databases } from "./config";
import { ID, Query } from "appwrite";

export async function createUserAccount(users) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      users.email,
      users.password,
      users.name
    );

    if (!newAccount) throw Error;

    const newUser = await saveUserToDB({
      userId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveUserToDB(users) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      users
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function signInAccount(users) {
    try {
      const session = await account.createEmailSession(users.email, users.password);
      return session;
    } catch (error) {
      return null;
    }
  }


  export async function getCurrentUser() {
    try {
      const currentAccount = await account.get();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal("userId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function signOutAccount() {
    try {
      const session = await account.deleteSession("current");
      return session;
    } catch (error) {
      return null;
    }
  }