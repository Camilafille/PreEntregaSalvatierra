
import {doc, getDoc, getFirestore, getDocs,  collection, query, where} from "firebase/firestore";

// Producto
export const getProduct = (id) => {


  return new Promise((resolve, reject) => {
    const db = getFirestore();

    const itemDoc = doc(db, "Items", id);

    getDoc(itemDoc)
      .then((doc) => {
        if (doc.exists()) {
          resolve({ id: doc.id, ...doc.data() });
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        reject(error);
      })
  });
};



//Productos
  export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
      const db = getFirestore();
  
      const itemCollection = collection(db, "Items");
  
      let q;
      if (categoryId) {
        q = query(itemCollection, where("categoryId", "==", categoryId));
      } else {
        q = query(itemCollection);
      }
  
      getDocs(q)
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          resolve(products);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  