import React from "react";
import {
  EuiBadge,
  EuiBasicTable,
  EuiHealth,
  EuiTableActionsColumnType,
  formatDate,
} from "@elastic/eui";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";
import {
  EuiTableComputedColumnType,
  EuiTableFieldDataColumnType,
} from "@elastic/eui/src/components/basic_table/table_types";
import data from "../sample/logs-sample";
const Status = {
  added: { color: "warning", point: "+1", icon: "listAdd" },
  update: { color: "primary", point: "" },
  done: { color: "secondary", point: "+1", icon: "check" },
  deleted: { color: "danger", point: "-1", icon: "trash" },
};

const Logs = () => {
  const columns: EuiBasicTableColumn<any>[] = [
    { field: "id", name: "Id" },
    { field: "name", name: "Name" },
    {
      field: "status",
      name: "Status",
      render: (status) => (
        <EuiHealth color={Status[status].color}>{status}</EuiHealth>
      ),
    },
    {
      field: "time",
      name: "Changed at",
      dataType: "date",
      render: (date) => formatDate(date, "dobLong"),
    },
    {
      render: (item) => (
        <EuiBadge
          color={Status[item.status].color}
          iconType={Status[item.status].icon}
          iconSide="left"
        >
          {Status[item.status].point}
        </EuiBadge>
      ),
      name: "Point",
    },
    {
      name: "Payload",
      actions: [
        {
          name: "Payload",
          description: "Show payload for this record",
          type: "icon",
          icon: "apmTrace",
          onClick: () => "",
        },
      ],
      width: "100px",
    },
  ];

  return <EuiBasicTable columns={columns} items={data} hasActions={true} />;
};

export default Logs;
