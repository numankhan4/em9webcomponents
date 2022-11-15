# Data Table

[component-header:em9-data-table]

A description of the component goes here.

```html preview
<em9-data-table
  id="dataTable1"
  paginationEnable="true"
  currentPage="1"
  pageSize="6"
  siblingCount="1"
  sizeColumnsToFit="true"
  suppressPaginationPanel="true"
  filterBlock
></em9-data-table>
<script>
  const columnDefs1 = [
    { headerName: 'Make', headerClass: 'CustomHeader', field: 'make', editable: true, sortable: true, resizable: true },
    { field: 'model', editable: true, sortable: true, resizable: true },
    { field: 'price', editable: true, sortable: true, resizable: true }
  ];
  const noData = [
    {
      description:
        'We had some trouble loading this page. Please refresh the page to try again or get in touch if the problem sticks around!',
      type: 'noData',
      icon: 'outline-info-circle',
      primaryBtn: `<em9-button variant="primary"  size='large'>Reload</em9-button>`
    }
  ];

  fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const getTale1 = document.getElementById('dataTable1');
      getTale1.rowDataInput = data;
      getTale1.colDataInput = columnDefs1;
      getTale1.totalCount = data.length;
      getTale1.notFound = noData;
      getTale1.addEventListener('em9-grid-ready', event => {
        event.detail.api.sizeColumnsToFit();
      });
      getTale1.addEventListener('em9-grid-table', event => {
        const $event = event;
        if (getTale1.shadowRoot.querySelector('.filter-text-box')) {
          getTale1.shadowRoot.querySelector('.filter-text-box').addEventListener('keyup', event => {
            const clearButton = getTale1.shadowRoot.querySelector('.clear-btn');
            if (clearButton !== null) {
              clearButton.addEventListener('click', event => {
                getTale1.shadowRoot.querySelector('.filter-text-box').value = '';
                $event.detail.gridApi.setQuickFilter('');
              });
            }
          });
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
</script>
```

### First Example

`headerBlock` and `filterBlock` attributes are used to add header block and filter block respectively.
`headerComponent` class is used make to custom header.
`cellRenderer` class is used to make custom column.

```html preview
<em9-data-table
  id="dataTable2"
  rowHeight="72"
  paginationEnable="true"
  currentPage="2"
  pageSize="5"
  siblingCount="1"
  headerBlock
  filterBlock
  gridHeading="Vendor movements"
  gridDescription="Keep track of vendor and their security ratings."
>
  <div slot="right-header">
    <em9-button variant="tertiary gray">Tertiary</em9-button>
    <em9-button variant="secondary color">Secondary</em9-button>
    <em9-button variant="secondary gray">Secondary</em9-button>
    <em9-button>Primary</em9-button>
  </div>
  <em9-badge slot="selected-badge" variant="light-primary">10/20 seats</em9-badge>
  <em9-button-group slot="left-filter">
    <em9-button variant="secondary gray">View all</em9-button>
    <em9-button variant="secondary gray">Monitored</em9-button>
    <em9-button variant="secondary gray">Unmonitored</em9-button>
  </em9-button-group>
</em9-data-table>

<script>
  class CustomHeaderGroup {
    init(params) {
      this.params = params;
      this.eGui = document.createElement('div');
      this.eGui.className = 'ag-header-group-cell-label';
      this.eGui.innerHTML =
        '' +
        '<div class="customHeaderLabel">' +
        this.params.displayName +
        '</div>' +
        '<em9-tooltip content="help text" placement="top-start" trigger="click"><em9-icon name="linear-message-question" style="font-size:18px;margin-left:6px;"></em9-icon></em9-tooltip>';
    }

    getGui() {
      return this.eGui;
    }
  }
  class StatusCellRenderer {
    // init method gets the details of the cell to be renderer
    init(params) {
      this.eGui = document.createElement('span');
      console.log(params.value);
      let variant;
      if (params.value === 'Active') {
        variant = 'success';
      } else if (params.value === 'Inactive') {
        variant = 'warning';
      } else if (params.value === 'Busy') {
        variant = 'danger';
      }
      if (params.value !== '')
        this.eGui.innerHTML = `<em9-tag variant=${variant} size="small">${params.value}</em9-tag>`;
    }
    getGui() {
      return this.eGui;
    }

    refresh(params) {
      return false;
    }
  }
  class NameCellRenderer {
    // init method gets the details of the cell to be renderer
    init(params) {
      this.eGui = document.createElement('div');
      this.eGui.className = 'nameCell';
      console.log(params.value);
      if (params.value !== '')
        this.eGui.innerHTML = `<em9-avatar image="${params.value.profileImg}" label="Avatar with an image icon"><em9-icon slot="icon" name="image"></em9-icon></em9-avatar>
          <span style="color: var(--em9-color-gray-700);font-weight: var(--em9-font-weight-semibold);line-height:1;">${params.value.name}</span>
          <div  style="line-height:1.1;">${params.value.emailAddress}</div>`;
    }
    getGui() {
      return this.eGui;
    }

    refresh(params) {
      return false;
    }
  }

  class ActionCellRenderer {
    // init method gets the details of the cell to be renderer
    init(params) {
      this.eGui = document.createElement('div');
      this.eGui.classList.add('action');

      if (params.value !== '') {
        let numberOfElementsRender = 0;
        for (const element of params.value) {
          let variant;
          if (element === 'Edit') {
            this.eGui.innerHTML += `<em9-button variant="tertiary gray" size="small" onlyicon>
                        <em9-icon name="outline-edit-2"></em9-icon>
                        </em9-button>`;
          } else if (element === 'Delete') {
            this.eGui.innerHTML += `<em9-button variant="tertiary gray" size="small" onlyicon><em9-icon name="linear-trash"></em9-icon> </em9-button>`;
          }
        }
      }
      let style = `<style>
        </style>`;
      this.eGui.innerHTML += style;
    }
    getGui() {
      return this.eGui;
    }

    refresh(params) {
      return false;
    }
  }
  class TeamsCellRenderer {
    // init method gets the details of the cell to be renderer
    init(params) {
      this.eGui = document.createElement('div');
      this.eGui.classList.add('Teams');

      if (params.value !== '') {
        let numberOfElementsRender = 0;
        for (const element of params.value) {
          if (numberOfElementsRender < 3) {
            let variant;
            if (element === 'WEB') {
              variant = 'light-indigo';
            } else if (element === 'PMO') {
              variant = 'light-blue';
            } else if (element === 'CIG') {
              variant = 'light-primary';
            }
            this.eGui.innerHTML += `<em9-badge variant=${variant} >${element}</em9-badge>`;
            numberOfElementsRender++;
          } else {
            this.eGui.innerHTML += `<em9-badge variant="light-gray-blue" >+2</em9-badge>`;
            break;
          }
        }
      }
      let style = `<style>
        .Teams em9-badge + em9-badge
        {
          margin-left:10px;
        }
        </style>`;
      this.eGui.innerHTML += style;
    }
    getGui() {
      return this.eGui;
    }

    refresh(params) {
      return false;
    }
  }

  const rowData2 = [
    {
      profile: {
        profileImg:
          'https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right',
        name: 'Olivia Rhye',
        emailAddress: 'olivia@untitledui.com'
      },
      Status: 'Active',
      role: 'Architect',
      emailAddress: 'nhaq@em9inc.com',
      teams: ['WEB', 'PMO', 'CIG', 'label', 'label'],
      actions: ['Edit', 'Delete']
    },
    {
      profile: {
        profileImg:
          'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80',
        name: 'Numan Ul Haq 2',
        emailAddress: 'nhaq2@em9inc.com'
      },
      Status: 'Inactive',
      role: 'Architect',
      emailAddress: 'nhaq2@em9inc.com',
      teams: ['Design'],
      actions: ['Edit', 'Delete']
    },
    {
      profile: {
        profileImg:
          'https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80',
        name: 'Numan Ul Haq 3',
        emailAddress: 'nhaq3@em9inc.com'
      },
      Status: 'Busy',
      role: 'Architect',
      emailAddress: 'nhaq3@em9inc.com',
      teams: ['WEB'],
      actions: ['Edit', 'Delete']
    },
    {
      profile: {
        profileImg:
          'https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80',
        name: 'Numan Ul Haq 4',
        emailAddress: 'nhaq4@em9inc.com'
      },
      Status: 'Appear offline',
      role: 'Architect',
      emailAddress: 'nhaq4@em9inc.com',
      teams: ['WEB'],
      actions: ['Edit', 'Delete']
    },
    {
      profile: {
        profileImg:
          'https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80',
        name: 'Numan Ul Haq 5',
        emailAddress: 'nhaq5@em9inc.com'
      },
      Status: 'Active',
      role: 'Architect',
      emailAddress: 'Numan Ul Haq 5',
      teams: ['WEB'],
      actions: ['Edit', 'Delete']
    },
    {
      profile: {
        profileImg:
          'https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80',
        name: 'Numan Ul Haq 6',
        emailAddress: 'nhaq6@em9inc.com'
      },
      Status: 'Offline',
      role: 'Architect',
      emailAddress: 'Numan Ul Haq 6',
      teams: ['Design'],
      actions: ['Edit', 'Delete']
    }
  ];
  const columnDefs2 = [
    {
      headerName: 'Name',
      field: 'profile',
      cellRenderer: NameCellRenderer,
      width: 290,
      checkboxSelection: true,
      headerCheckboxSelection: 'true',
      suppressRowClickSelection: true,
      cellClass: 'cell-has-avatar',
      autoHeight: true
    },
    {
      headerName: 'Status',
      field: 'Status',
      cellRenderer: StatusCellRenderer,
      sortable: true,
      width: 124
    },
    {
      field: 'role',
      headerComponent: CustomHeaderGroup,
      width: 176
    },
    {
      headerName: 'Email Address',
      field: 'emailAddress',
      width: 220
    },
    {
      headerName: 'Teams',
      field: 'teams',
      cellRenderer: TeamsCellRenderer,
      width: 280
    },

    {
      headerName: '',
      field: 'actions',
      cellClass: 'cell-has-action-btn',
      cellRenderer: ActionCellRenderer,
      width: 150
    }
  ];
  const noData = [
    {
      heading: 'Something went wrong...',
      description:
        'We had some trouble loading this page. Please refresh the page to try again or get in touch if the problem sticks around!',
      type: 'noData',
      icon: 'outline-info-circle',
      secondaryBtn: `<em9-button variant="secondary gray" size='large' part="clearbutton" class="clear-btn">Clear search</em9-button>`,
      primaryBtn: `<em9-button variant="primary"  size='large'>New project</em9-button>`
    },
    {
      heading: 'No vendors found',
      description: 'Your search $filterText did not match any vendors. Please try again or create add a new vendor.',
      type: 'noSearch',
      secondaryBtn: `<em9-button variant="secondary gray" size='large' part="clearbutton" class="clear-btn">Clear search</em9-button>`,
      primaryBtn: `<em9-button variant="primary"  size='large'>New project</em9-button>`
    }
  ];
  const getTale2 = document.getElementById('dataTable2');
  setTimeout(function () {
    getTale2.colDataInput = columnDefs2;
    getTale2.rowDataInput = rowData2;
    getTale2.notFound = noData;
    getTale2.setAttribute('totalCount', rowData2.length);
  }, 2000);
  getTale2.addEventListener('em9-grid-row-click', event => {
    console.log('test row was clicked', event);
  });
  getTale2.addEventListener('em9-grid-ready', event => {
    console.log('The em9 grid is ready and initialized ***', event);
    event.detail.api.sizeColumnsToFit();
  });
  getTale2.addEventListener('em9-grid-table', event => {
    console.log('The em9-grid-table ***', event);
    event.detail.gridApi.setQuickFilter('');
    event.detail.gridApi.hideOverlay();
  });
  getTale2.addEventListener('em9-grid-table', event => {
    const $event = event;
    getTale2.shadowRoot.querySelector('.filter-text-box').addEventListener('keyup', event => {
      const clearButton = getTale2.shadowRoot.querySelector('.clear-btn');
      clearButton.addEventListener('click', event => {
        getTale2.shadowRoot.querySelector('.filter-text-box').value = '';
        $event.detail.gridApi.setQuickFilter('');
        $event.detail.gridApi.hideOverlay();
        if (rowData2.length <= 0) {
          $event.detail.gridApi.showNoRowsOverlay();
        } else {
          $event.detail.gridApi.hideOverlay();
        }
      });
    });
  });
</script>
```

## Examples

TODO

[component-metadata:em9-data-table]
