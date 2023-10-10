import * as React from "react";
import { useState } from "react";
import Form from "@roo/roo/Form";
import Button from "@roo/roo/Button";
import Input from "@roo/roo/Input";
import CheckBox from "@roo/roo/CheckBox";
import Selector from "@roo/roo/Selector";
import Grid from "@roo/roo/Grid";
import Icon from "@roo/roo/Icon";
import Tooltip from "@roo/roo/Tooltip";

const { Row, Col } = Grid;
const rules = {
  name: {
    required: true,
    message: "用户名必填哦",
    trigger: "onBlur",
  },
  password: [
    {
      required: true,
      type: "string",
      message: "密码必填哦",
    },
    {
      min: 8,
      message: "长度至少 8 位",
    },
  ],
  cardType: [
    {
      required: true,
      type: "number",
      message: "证件号码必填哦",
    },
  ],
};

function App() {
  const [formValue, setFormValue] = useState({
    name: "",
    password: "",
  });

  const [changeName, setChangeName] = useState(0);

  const resName = React.useMemo(() => {
    if (changeName % 2 === 0) {
      return "name";
    } else {
      return "password";
    }
  }, [changeName]);

  const { cardType, cardNumber } = formValue;
  return (
    <div className="App">
      <button onClick={() => setChangeName(changeName + 1)}>
        change name{changeName}
      </button>
      <Form
        value={formValue}
        rules={rules}
        onSubmit={(value, errors) => {
          console.log("submit callback: ", value, errors);
        }}
        onChange={(name, value) => {
          form.values.password = ''
          console.log("onChange", name, value);
        }}
      >
        {({ values, errors, submitForm, setFieldValue }) => (
          <form>
            <Form.Field label="服务费" name={resName} required>
              {({ value, handleChange, handleBlur }) => (
                <Input
                  value={value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="user name"
                />
              )}
            </Form.Field>
            <Form.Field>
              <Button onClick={submitForm}>确认</Button>
            </Form.Field>
          </form>
        )}
      </Form>
    </div>
  );
}

export default App;
