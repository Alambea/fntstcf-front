import Button from "../Button/Button";
import "./UserForm.scss";

const UserForm = (): React.ReactElement => {
  return (
    <form className="user-form">
      <div className="user-form__group">
        <label htmlFor="name" className="user-form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="user-form__input"
          aria-required="true"
        />
      </div>
      <div className="user-form__group">
        <label htmlFor="username" className="user-form__label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="user-form__input"
          aria-required="true"
        />
      </div>
      <div className="user-form__group">
        <label htmlFor="email" className="user-form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="user-form__input"
          aria-required="true"
        />
      </div>

      <div className="user-form__group">
        <label htmlFor="address" className="user-form__label">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="user-form__input"
          aria-required="true"
        />
      </div>
      <Button type="submit" className="outlined" disabled>
        Add
      </Button>
    </form>
  );
};

export default UserForm;
