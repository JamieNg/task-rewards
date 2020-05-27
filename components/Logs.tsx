import React from "react";
import { EuiBasicTable } from "@elastic/eui";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";
import { EuiTableFieldDataColumnType } from "@elastic/eui/src/components/basic_table/table_types";

const data = [{ name: "Hi" }];

const Logs = () => {
  const columns: EuiTableFieldDataColumnType<any>[] = [
    { field: "name", name: "Name" },
  ];

  return <EuiBasicTable columns={columns} items={data}></EuiBasicTable>;
};

export default Logs;
