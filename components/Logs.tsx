import React from "react";
import { EuiBasicTable } from "@elastic/eui";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";
import { EuiTableFieldDataColumnType } from "@elastic/eui/src/components/basic_table/table_types";

enum Status {
  Added,
  Inprogress,
  Done,
  Deleted,
}

const data = [
  {
    id: 16927,
    name: "test story",
    state: "update",
    time: "2017-06-27T16:20:44Z",
  },
];

const Logs = () => {
  const columns: EuiTableFieldDataColumnType<any>[] = [
    { field: "id", name: "Id" },
    { field: "name", name: "Name" },
    { field: "state", name: "State" },
    { field: "time", name: "Changed at" },
  ];

  return <EuiBasicTable columns={columns} items={data}></EuiBasicTable>;
};

export default Logs;
