import React, { ChangeEvent } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./markdown.module.css";

const Markdownform: React.FC = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");

  return (
    <div data-color-mode="light" className={styles.markdown}>
      <MDEditor
        value={value}
        height="100%"
        minHeight={500}
        onChange={(val) => {
          setValue(val!);
        }}
      />
    </div>
  );
};

export default Markdownform;
