import { useEffect, useState } from "react";
import { getData } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true);

    getData()
      .then((data) => {
        setItem( data.find(prod => prod.id === Number(itemId)) )
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Spin tip="Cargando" indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
          <div className="content" />
        </Spin>
      ) : (
        <ItemDetail item={item}/>
      )}
    </>
  );
};

export default ItemDetailContainer;