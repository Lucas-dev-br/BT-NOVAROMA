import {
  GET_PRODUCTS,
  GET_ORDERS,
  GET_SELLERS,
  GET_CUSTOMERS,
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,

  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAIL,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,

  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAIL,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAIL,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAIL,

  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,

  RESET_ECOM_FLAG
} from "./actionType";

const INIT_STATE = {
  products: [],
  orders: [],
  sellers: [],
  customers: [],
  error: {},
};

const Ecommerce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_PRODUCTS:
          return {
            ...state,
            products: action.payload.data,
          };

        case DELETE_PRODUCT:
          return {
            ...state,
            products: state.products.filter(
              product => (product.id + '') !== (action.payload.data + '')
            ),
          };

        case GET_ORDERS:
          return {
            ...state,
            orders: action.payload.data,
            isOrderCreated: false,
            isOrderSuccess: true
          };
        case GET_SELLERS:
          return {
            ...state,
            sellers: action.payload.data,
          };
        case GET_CUSTOMERS:
          return {
            ...state,
            customers: action.payload.data,
            isCustomerCreated: false,
            isCustomerSuccess: true
          };

        default:
          return { ...state };
      }
    case API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_PRODUCTS:
          return {
            ...state,
            error: action.payload.error,
          };

        case DELETE_PRODUCT:
          return {
            ...state,
            error: action.payload.error,
          };
        case GET_ORDERS:
          return {
            ...state,
            error: action.payload.error,
            isOrderCreated: false,
            isOrderSuccess: false
          };
        case GET_SELLERS:
          return {
            ...state,
            error: action.payload.error,
          };
        case GET_CUSTOMERS:
          return {
            ...state,
            error: action.payload.error,
            isCustomerCreated: false,
            isCustomerSuccess: false
          };
        default:
          return { ...state };
      }

    case GET_PRODUCTS:
      return {
        ...state,
      };

    case GET_ORDERS: {
      return {
        ...state,
        isOrderCreated: false,
      };
    }
    case GET_SELLERS: {
      return {
        ...state,
      };
    }
    case GET_CUSTOMERS:
      return {
        ...state,
        isCustomerCreated: false
      };

    case DELETE_PRODUCT:
      return {
        ...state,
      };

    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        isOrderCreated: true,
        orders: [...state.orders, action.payload.data],
        isOrderAdd: true,
        isOrderAddFail: false
      };

    case ADD_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        isOrderAdd: false,
        isOrderAddFail: true
      };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter(
          order => order._id.toString() !== action.payload.order.toString()
        ),
        isOrderDelete: true,
        isOrderDeleteFail: false
      };

    case DELETE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        isOrderDelete: false,
        isOrderDeleteFail: true
      };

    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id.toString() === action.payload.data._id.toString()
            ? { ...order, ...action.payload.data }
            : order
        ),
        isOrderUpdate: true,
        isOrderUpdateFail: false
      };

    case UPDATE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        isOrderUpdate: false,
        isOrderUpdateFail: true
      };

    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        isCustomerCreated: true,
        customers: [...state.customers, action.payload.data],

        isCustomerAdd: true,
        isCustomerAddFail: false
      };

    case ADD_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,

        isCustomerAdd: false,
        isCustomerAddFail: true
      };

    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.map(customer =>
          customer._id.toString() === action.payload.data._id.toString()
            ? { ...customer, ...action.payload.data }
            : customer
        ),
        isCustomerUpdate: true,
        isCustomerUpdateFail: false
      };

    case UPDATE_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
        isCustomerUpdate: false,
        isCustomerUpdateFail: true
      };


    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer._id.toString() !== action.payload.customer.toString()
        ),
        isCustomerDelete: true,
        isCustomerDeleteFail: false
      };

    case DELETE_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
        isCustomerDelete: false,
        isCustomerDeleteFail: true
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          product => product._id.toString() !== action.payload.product.toString()
        ),
        isProductDelete: true,
        isProductDeleteFail: false,
      };

    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
        isProductDelete: false,
        isProductDeleteFail: true,
      };

    case RESET_ECOM_FLAG:
      return {
        ...state,
        isCustomerAdd: false,
        isCustomerAddFail: false,
        isCustomerDelete: false,
        isCustomerDeleteFail: false,
        isCustomerUpdate: false,
        isCustomerUpdateFail: false,
        isOrderAdd: false,
        isOrderAddFail: false,
        isOrderDelete: false,
        isOrderDeleteFail: false,
        isOrderUpdate: false,
        isOrderUpdateFail: false,
        isProductDelete: false,
        isProductDeleteFail: false,
        error: false
      };
    default:
      return { ...state };
  }
};

export default Ecommerce;
