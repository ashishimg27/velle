import React, { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./Poll.css";
import {
  addDoc,
  collection,
  doc,
  runTransaction,
  setDoc,
  getDoc,
} from "firebase/firestore"; // Import runTransaction
import { fireDB } from "../../fireabase/FirebaseConfig";
import { toast } from "react-toastify";

function Poll() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const cartItems = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const [votes, setVotes] = React.useState({}); // Store user's votes locally

  useEffect(() => {
    const createVotesDocuments = async () => {
      try {
        const votesCollection = collection(fireDB, "votes");

        for (const Eachproducts of product) {
          const { id } = Eachproducts;
          const productDocRef = doc(votesCollection, id);

          // Check if the document already exists
          const docSnapshot = await getDoc(productDocRef);

          if (!docSnapshot.exists()) {
            // Set the initial values for yesCount, noCount, and votedUsers
            const initialData = {
              yesCount: 0,
              noCount: 0,
              votedUsers: [], // Initialize an empty array for votedUsers
            };

            await setDoc(productDocRef, initialData);

            console.log(`Document created for product ${id}`);
          } else {
            console.log(`Document already exists for product ${id}`);
          }
        }

        console.log("All documents checked and created if necessary.");
      } catch (error) {
        console.error("Error creating documents:", error);
      }
    };

    // Call the function to create "votes" documents
    createVotesDocuments();
  }, []);
  const handleVote = async (productId, voteType) => {
    console.log("productId:", productId);
    if (user) {
      try {
        const voteRef = doc(fireDB, "votes", productId);

        await runTransaction(fireDB, async (transaction) => {
          const voteDoc = await transaction.get(voteRef);

          if (!voteDoc.exists()) {
            console.error("Item does not exist.");
            return;
          }

          // Initialize updatedData with existing data from Firestore
          const data = voteDoc.data();
          const updatedData = {
            yesCount: data.yesCount || 0,
            noCount: data.noCount || 0,
            votedUsers: data.votedUsers || [],
          };

          console.log("Before update: updatedData", updatedData);

          // Check if the user has already voted for this product
          if (!updatedData.votedUsers.includes(user)) {
            // User has not voted for this product, update the counts and user's vote
            if (voteType === "yes") {
              updatedData.yesCount++;
            } else if (voteType === "no") {
              updatedData.noCount++;
            }

            // Add the user's ID to the votedUsers array
            updatedData.votedUsers.push(user);

            console.log("After update: updatedData", updatedData);

            // Ensure that updatedData is valid before updating the document
            if (
              typeof updatedData.yesCount === "number" &&
              typeof updatedData.noCount === "number" &&
              Array.isArray(updatedData.votedUsers)
            ) {
              transaction.update(voteRef, updatedData);
              toast.success("Vote added successfully.");

              console.log("Vote recorded successfully.");
            } else {
              console.error("Invalid data for update:", updatedData);
            }
          } else {
            toast.error("You already voted for this product ");

            console.log("User has already voted for this product.");
          }
        });
      } catch (error) {
        console.error("Error recording vote:", error.message);
      }
    } else {
      console.error("Error recording vote: User not authenticated.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="poll-container">
        {product.map((image) => (
          <div key={image.id} className="poll-card">
            <img src={image.imageUrl} alt={`Image ${image.id}`} />
            <h1>{image.title}</h1>
            <div className="vote-buttons">
              <button
                style={{
                  padding: "5px 15px",
                  backgroundColor: "white",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
                onClick={() => handleVote(image.id, "yes")}
              >
                <p style={{ color: "black" }}> 😍Yay!</p>
              </button>
              <button
                style={{
                  padding: "5px 15px",
                  backgroundColor: "white",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
                onClick={() => handleVote(image.id, "no")}
              >
                <p style={{ color: "black" }}>😏Nay</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Poll;
