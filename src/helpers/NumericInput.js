import { default as Input } from 'react-numeric-input';

Input.prototype.UNSAFE_componentWillMount = Input.prototype.componentWillMount;
Input.prototype.UNSAFE_componentWillReceiveProps = Input.prototype.componentWillReceiveProps;
Input.prototype.UNSAFE_componentWillUpdate = Input.prototype.componentWillUpdate;

delete Input.prototype.componentWillMount;
delete Input.prototype.componentWillReceiveProps;
delete Input.prototype.componentWillUpdate;

export default Input;
