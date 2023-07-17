import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  background-color: #fff;
  overflow-x: auto;
  position: relative;
  height: 100%;
  /* min-height: 100vh; */

  table {
    tbody {
      td {
        .mission {
          justify-content: center;
        }
      }
    }

    thead {
      tr {
        .mission {
          justify-content: center;
        }
      }
    }
  }

  .select {
    width: 100px;
    height: 32px;
    background: #f8faff;
    border: 1px solid #afc3da;
    border-radius: 4px;
    position: absolute;
    top: 60px;

    strong {
      position: absolute;
    }

    select,
    button {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
      color: #3670c9;
      /* padding-left: 30px; */
      cursor: pointer;
    }
  }
  div {
    table {
      /* margin-top: 40px; */
    }
  }

  .ub-box-szg_border-box {
    .ub-b-top-clr_1F3D99_hxa9p6 {
      background-color: salmon;
    }
  }
`;
