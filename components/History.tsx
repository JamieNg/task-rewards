import React, { useState } from "react";
import {
  EuiBasicTable,
  EuiConfirmModal,
  EuiOverlayMask,
  formatDate,
} from "@elastic/eui";
import { historyData } from "../sample/history-sample";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";

const History = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const ConfirmModal = () => {
    return (
      <EuiOverlayMask>
        <EuiConfirmModal
          title="Rollback this transaction?"
          onCancel={() => setShowConfirm(false)}
          confirmButtonText="Yes!"
          cancelButtonText="No"
          defaultFocusedButton="cancel"
        />
      </EuiOverlayMask>
    );
  };

  const columns: EuiBasicTableColumn<any>[] = [
    { field: "id", name: "Id" },
    {
      field: "time",
      name: "Time",
      dataType: "date",
      render: (date) => formatDate(date, "dobLong"),
    },
    { field: "items", name: "Exchanged items" },
    { field: "points", name: "Points" },
    {
      name: "Rollback",
      actions: [
        {
          name: "Rollback",
          description: "Rollback this transaction",
          type: "icon",
          icon: "editorUndo",
          onClick: () => setShowConfirm(true),
        },
      ],
    },
  ];
  return (
    <>
      <EuiBasicTable columns={columns} hasActions items={historyData} />
      {showConfirm && <ConfirmModal />}
    </>
  );
};

export default History;
