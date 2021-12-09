import { Button } from "../components/Button/Button";
import React from "react";

function VBox() {
  return <div style={{ height: 5 }}></div>;
}

function HBox() {
  return <span style={{ marginRight: 5 }}></span>;
}

export const Demo01 = () => {
  return (
    <>
      <h1>按钮</h1>
      <h2>主要按钮</h2>
      <Button variant="contained" color="primary">
        确定
      </Button>
      <VBox />
      <Button variant="contained" disabled>
        确定
      </Button>
      <h2>次要按钮</h2>
      <Button variant="outlined">取消</Button>
      <HBox />
      <Button variant="outlined" color={"error"}>
        取消
      </Button>
      <HBox />
      <Button variant="outlined" color={"warning"}>
        取消
      </Button>
      <HBox />
      <Button variant="outlined" color={"success"}>
        取消
      </Button>
      <VBox />
      <Button variant="outlined" disabled>
        取消
      </Button>
      <h2>轻浅按钮</h2>
      <Button variant="text">取消</Button>
      <VBox />
      <Button variant="text" disabled>
        取消
      </Button>
      <h2>文字按钮</h2>
      <Button variant="text">取消</Button>
      <VBox />
      <Button variant="text" disabled>
        取消
      </Button>
      <h2>危险警报按钮</h2>
      <Button variant="contained" color="error">
        删除
      </Button>
      <VBox />
      <Button variant="contained" color="error" disabled>
        删除
      </Button>{" "}
      <h2>轻微警报按钮</h2>
      <Button variant="contained" color="warning">
        删除
      </Button>
      <VBox />
      <Button variant="contained" color="warning" disabled>
        删除
      </Button>{" "}
      <h2>信息按钮</h2>
      <Button variant="contained" color="info">
        了解
      </Button>
      <VBox />
      <Button variant="contained" color="info" disabled>
        了解
      </Button>{" "}
      <h2>成功按钮</h2>
      <Button variant="contained" color="success">
        删除
      </Button>
      <VBox />
      <Button variant="contained" color="success" disabled>
        删除
      </Button>
    </>
  );
};
