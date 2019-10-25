import React from "react";
import { Row, Col, Input, Button } from "antd";

function TodoCreator({ value, onChange, onKeyDown, onCreate }) {
  return (
    <Row type="flex">
      <Col span={20}>
        <Input
          placeholder="Basic usage"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </Col>
      <Col span={2}></Col>
      <Col span={2}>
        <Button onClick={onCreate} type="primary">
          Create
        </Button>
      </Col>
    </Row>
  );
}

export default TodoCreator;
