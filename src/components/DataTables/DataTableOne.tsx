import React, { useMemo, useState, useEffect, useRef } from "react";
import Link from 'next/link';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  Column,
  FilterProps,
  useRowSelect,
} from "react-table";
import ColumnFilter from "./ColumnFilter";

interface DataTableOneProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  handleOpenModal: (type: string, mode: "create" | "edit") => void;
  selectedRow: any; // 父组件传递的 selectedRow
  setSelectedRow: (row: any) => void; // 父组件传递的 setSelectedRow 函数
  handleDelete: (row: any) => void;
  handleDetail: (row: any) => void;
}

const DataTableOne = <T extends object>({
  columns,
  data,
  handleOpenModal,
  selectedRow,
  setSelectedRow,
  handleDelete,
  handleDetail
}: DataTableOneProps<T>) => {
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter as React.FC<FilterProps<T>>,
    };
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageSize: 5 }, // 设置默认页数为5
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          disableSortBy: true,
          Header: ({ getToggleAllRowsSelectedProps }) => {
            const { indeterminate, ...restProps } = getToggleAllRowsSelectedProps();
            const ref = useRef<HTMLInputElement>(null);

            useEffect(() => {
              if (ref.current) {
                ref.current.indeterminate = indeterminate || false;
              }
            }, [indeterminate]);

            return (
              <div>
                <input type="checkbox" ref={ref} {...restProps} />
              </div>
            );
          },
          Cell: ({ row }: { row: any }) => {
            const { indeterminate, ...restProps } = row.getToggleRowSelectedProps();
            const ref = useRef<HTMLInputElement>(null);

            useEffect(() => {
              if (ref.current) {
                ref.current.indeterminate = indeterminate || false;
              }
            }, [indeterminate]);

            return (
              <div>
                <input type="checkbox" ref={ref} {...restProps} />
              </div>
            );
          },
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
    selectedFlatRows,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  const handleEdit = (row: T) => {
    setSelectedRow(row);
    console.log('row', row);
    handleOpenModal("normal", "edit");
  };

  const handleCreate = (type: string) => {
    setSelectedRow({});
    handleOpenModal(type, "create");
  };

  return (
    <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center px-8 pb-4">
        <div className="flex items-center w-[600px] space-x-4">
          <input
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value || undefined)}
            className="w-[300px] rounded-md border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="请输入关键词..."
          />
          <button onClick={() => handleCreate("normal")} className="rounded-md bg-primary px-9 py-3 font-medium text-white">
            新增
          </button>
        </div>

        <div className="flex items-center font-medium space-x-2">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-transparent pl-2"
          >
            {[5, 10, 20, 50].map((page,key) => (
              <option key={`page-${key}`} value={page}>
                {page}
              </option>
            ))}
          </select>
          <p className="text-black dark:text-white">选择页数</p>
        </div>
      </div>

      <table
        {...getTableProps()}
        className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
      >
        <thead className="border-separate px-4">
          {headerGroups.map((headerGroup, key) => (
            <tr
              className="border-t border-stroke dark:border-strokedark"
              {...headerGroup.getHeaderGroupProps()}
              key={`group-${key}`}
            >
              {headerGroup.headers.map((column, key) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={`column-${key}`}
                >
                  <div className="flex items-center">
                    <span> {column.render("Header")}</span>
                    {key !== 0 && (
                      <div className="ml-2 inline-flex flex-col space-y-[2px]">
                        <span className="inline-block">
                          <svg className="fill-current" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 0L0 5H10L5 0Z" fill="" />
                          </svg>
                        </span>
                        <span className="inline-block">
                          <svg className="fill-current" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="" />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>

                  {column.canFilter ? column.render("Filter") : null}
                </th>
              ))}
              <th key="action-99999">
                <div className="flex items-center">
                  <span className="mx-auto">操作</span>
                </div>
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, key) => {
            prepareRow(row);
            return (
              <tr
                className="border-t border-stroke dark:border-strokedark"
                {...row.getRowProps()}
                key={`rowCell-${key}`}
              >
                {row.cells.map((cell: any, key: any) => {
                  return (
                    <td {...cell.getCellProps()} key={`rowCell-item-${key}`}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td key={`action-${key}`}>
                  <div className="flex items-center">
                    <div className="mx-auto space-x-1">
                      <button className="hover:text-meta-5" onClick={() => handleEdit(row.original)}>
                        编辑
                      </button>
                      <button className="hover:text-info" onClick={() => handleDetail(row.original)}>
                        详情
                      </button>
                      <button className="hover:text-danger" onClick={() => handleDelete(row.original)}>
                        删除
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex float-right border-t border-stroke px-6 pt-5 dark:border-strokedark">
        <div className="flex">
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                fill=""
              />
            </svg>
          </button>

          {pageOptions.map((_page, index) => (
            <button
              key={`page-${index}`}
              onClick={() => {
                gotoPage(index);
              }}
              className={`${pageIndex === index && "bg-primary text-white"
                } mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-primary hover:text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataTableOne;
