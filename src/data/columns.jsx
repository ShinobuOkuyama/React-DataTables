const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
    grow: 2
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
    hide: "sm"
  },
  {
    name: "Website",
    selector: "website",
    sortable: true
  },
  {
    name: "Company",
    selector: "company.name",
    sortable: true,
    hide: "md"
  },
  {
    name: "City",
    selector: "address.city",
    sortable: true,
    hide: "md"
  }
  // {
  //   name: "Buttons",
  //   button: true,
  //   cell: (row) =>
  //     row.showButtons ? (
  //       <>
  //         <button
  //           onClick={() => props.click(row.name)}
  //           style={{ marginRight: "5px" }}
  //         >
  //           E
  //         </button>
  //         <button onClick={() => props.click(row.name)}>D</button>
  //       </>
  //     ) : null
  // }
];

export default columns;
