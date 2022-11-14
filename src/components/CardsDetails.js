import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CardsDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((item) => {
              return (
                <>
                  <div className="items_img">
                    <img src={item.imgdata} />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {item.rname}{" "}
                          </p>
                          <p>
                            <strong>Price</strong> : {item.price}{" "}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {item.address}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹ 300{" "}
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {" "}
                              {item.rating} ★
                            </span>{" "}
                          </p>
                          <p>
                            <strong>Order Review</strong>{" "}
                            <span>{item.somedata}</span>{" "}
                          </p>
                          <p>
                            <strong> Remove :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>{" "}
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
