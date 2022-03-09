import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import { Button } from "react-bootstrap";
import { useExpanded } from "react-table/dist/react-table.development";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Styles = styled.div`
  input {
    background-color: transparent;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    border: 0;
  }
  tfoot {
    p {
      font-weight: 500;
    }
  }
`;

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="form-control"
    />
  );
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset }) {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    footerGroups,
    rows,
    state: { expanded },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily

      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    useExpanded
  );

  // Render the UI for your table
  return (
    <>
      <table
        className="table table-striped table-hover table-sm"
        {...getTableProps()}
      >
        <thead className="thead-dark">
          {headerGroups.map((headerGroup) => (
            <tr scope="row" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th scope="col" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((group) => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map((column) => (
                <td className="table-active" {...column.getFooterProps()}>
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}

const TableInver = () => {
  let Ano1 = 0
  const { simulacion } = useSelector((store) => store.app);
  const [data, setData] = useState(simulacion);

  useEffect(() => {
    if (simulacion.lenght < 1) {
      setData(simulacion);
    }
  }, [data]);

  const convertirMoneda = (total) => {
    const dato = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(total);
    return dato;
  };
  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: "expander", // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? "👇" : "👉"}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? "👇" : "👉"}
            </span>
          ) : null,
      },
      {
        Header: "Inversion",
        Footer: "",
        columns: [
          {
            Header: "Items",
            accessor: "item",
            Footer: "Totales",
          },
          {
            Header: "Año 0",
            accessor: "ano0",
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () => info.rows.reduce((sum, row) => row.values.ano0 + sum, 0),
                [info.rows]
              );
              // resultados.push({'Año 1': total})
              return <p>= {convertirMoneda(total)}</p>;
            },
          },
        ],
      },
      {
        Header: "Flujo de caja",
        Footer: "",
        columns: [
          {
            Header: "Año 1",
            accessor: "ano1",
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () => info.rows.reduce((sum, row) => row.values.ano1 + sum, 0),
                [info.rows]
              );
              Ano1 = total
              // resultados = {...resultados, 'Año 2':total}
              return <p>= {convertirMoneda(total)}</p>;
            },
          },
          {
            Header: "Año 2",
            accessor: "ano2",
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () => info.rows.reduce((sum, row) => row.values.ano2 + sum, 0),
                [info.rows]
              );

              return <p>= {convertirMoneda(total)}</p>;
            },
          },
          {
            Header: "Año 3",
            accessor: "ano3",
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () => info.rows.reduce((sum, row) => row.values.ano3 + sum, 0),
                [info.rows]
              );

              return <p>= {convertirMoneda(total)}</p>;
            },
          },
          {
            Header: "Año 4",
            accessor: "ano4",
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () => info.rows.reduce((sum, row) => row.values.ano4 + sum, 0),
                [info.rows]
              );

              return <p>= {convertirMoneda(total)}</p>;
            },
          },
          {
            Header: "Año 5",
            accessor: "ano5",
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () => info.rows.reduce((sum, row) => row.values.ano5 + sum, 0),
                [info.rows]
              );

              return <p>= {convertirMoneda(total)}</p>;
            },
          },
        ],
      },
    ],
    []
  );

  // const [data, setData] = React.useState([
  //   {
  //     item: "INVERSION",
  //     ano0: 0,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "Mano de obra",
  //     ano0: 3540000,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "Insumos y equipos",
  //     ano0: 13293500,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "Certificaciones",
  //     ano0: 20000000,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "INGRESOS",
  //     ano0: 0,
  //     ano1: 0,
  //     ano2: 11600000,
  //     ano3: 87000000,
  //     ano4: 87000000,
  //     ano5: 92800000,
  //   },
  //   {
  //     item: "EGRESOS",
  //     ano0: 0,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "Mano de obra",
  //     ano0: 0,
  //     ano1: 3540000,
  //     ano2: 4000000,
  //     ano3: 4680000,
  //     ano4: 5300000,
  //     ano5: 4900000,
  //   },
  //   {
  //     item: "Gastos insumos",
  //     ano0: 0,
  //     ano1: 3850000,
  //     ano2: 5700000,
  //     ano3: 5016000,
  //     ano4: 4000000,
  //     ano5: 4984000,
  //   },
  //   {
  //     item: "Gastos Fijos",
  //     ano0: 0,
  //     ano1: 13200000,
  //     ano2: 13750000,
  //     ano3: 14280000,
  //     ano4: 14850000,
  //     ano5: 15450000,
  //   },
  //   {
  //     item: "Gastos de Comercialización",
  //     ano0: 0,
  //     ano1: 3400000,
  //     ano2: 3000000,
  //     ano3: 3000000,
  //     ano4: 3000000,
  //     ano5: 3200000,
  //   },
  //   {
  //     item: "Gastos de administrativos",
  //     ano0: 0,
  //     ano1: 64000000,
  //     ano2: 66000000,
  //     ano3: 90000000,
  //     ano4: 93000000,
  //     ano5: 97000000,
  //   },
  //   {
  //     item: "Gastos CIF",
  //     ano0: 0,
  //     ano1: 300000,
  //     ano2: 312000,
  //     ano3: 324000,
  //     ano4: 337000,
  //     ano5: 350000,
  //   },
  //   {
  //     item: "PRESTAMOS",
  //     ano0: 0,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "Interes",
  //     ano0: 0,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "Amortización",
  //     ano0: 0,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  //   {
  //     item: "Gastos financieros",
  //     ano0: 0,
  //     ano1: 0,
  //     ano2: 0,
  //     ano3: 0,
  //     ano4: 0,
  //     ano5: 0,
  //   },
  // ]);

  const [originalData] = React.useState(data);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page

    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  // React.useEffect(() => {

  // }, [data]);

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => setData(originalData);
  if (data.lenght === 0) {
    return <Loader />;
  }
  console.log(data);
  console.log(Ano1)
  return (
    <Styles>
      <Table columns={columns} data={data} updateMyData={updateMyData} />
      <Button variant="warning" onClick={() => resetData}>
        Reiniciar tabla
      </Button>
      <Button variant="success" onClick={() => resetData}>
        Guardar tabla
      </Button>
    </Styles>
  );
};

export default TableInver;
