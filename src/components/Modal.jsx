import { useGlobalContext } from '../context';

const Modal = () => {
  const { cartList, setCartlist, totalSum } = useGlobalContext();

  return (
    <div className="modal">
      <ul>
        {cartList.map((data, idx) => {
          return (
            <li key={idx} className="mod-location">
              <div>${data.price}</div>
              <div> {data.location}</div>
              <i
                className="fa-solid fa-x"
                onClick={(e) => console.log(e.target)}
              />
            </li>
          );
        })}
      </ul>
      <div className="total-amount">
        <strong>Total:</strong> ${totalSum}
      </div>
    </div>
  );
};

export default Modal;
