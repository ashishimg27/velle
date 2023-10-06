import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <>
          <div className="h-full pt-10">
            {order
              .filter((obj) => obj.userid === userid)
              .map((order) => (
                <div
                  className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                  key={order.paymentId}
                >
                  {Array.isArray(order.cartItems.items) ? (
                    // Handle the case where cartItems.items is an array
                    order.cartItems.items.map((item) => (
                      <div className="rounded-lg md:w-2/3" key={item.id}>
                        <div
                          className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                          style={{
                            backgroundColor: mode === "dark" ? "#282c34" : "",
                            color: mode === "dark" ? "white" : "",
                          }}
                        >
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                          )}
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              {item.title && (
                                <h2
                                  className="text-lg font-bold text-gray-900"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.title}
                                </h2>
                              )}
                              {item.description && (
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.description}
                                </p>
                              )}
                              {item.price && (
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.price}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div
                      className="rounded-lg md:w-2/3"
                      key={order.cartItems.id}
                    >
                      <div
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        style={{
                          backgroundColor: mode === "dark" ? "#282c34" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        {order.cartItems[0].imageUrl && (
                          <img
                            src={order.cartItems[0].imageUrl}
                            alt="product-image"
                            className="w-full rounded-lg sm:w-40"
                          />
                        )}
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            {order.cartItems[0].title && (
                              <h2
                                className="text-lg font-bold text-gray-900"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {order.cartItems[0].title}
                              </h2>
                            )}
                            {order.cartItems[0].description && (
                              <p
                                className="mt-1 text-xs text-gray-700"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {order.cartItems[0].description}
                              </p>
                            )}
                            {order.cartItems[0].price && (
                              <p
                                className="mt-1 text-xs text-gray-700"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {order.cartItems[0].price}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl text-white">Not Order</h2>
      )}
    </Layout>
  );
}

export default Order;
