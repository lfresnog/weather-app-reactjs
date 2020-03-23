import styled from "styled-components";

export const SearchStyle = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  padding: 32px;
  width: 441px;
  height: fit-content;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);

  .search_title {
    h2 {
      color: #484848;
      font-size: 23px;
      font-weight: 600;
      line-height: 24px;
      margin: 0px;
      padding: 0px;
    }
  }

  .search_section {
    margin-top: 16px;

    .search_input {
      padding-left: 12px;
      padding-right: 12px;
      position: relative;
      align-items: center;
      background-color: #ffffff;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      display: flex;
      height: 48px;

      input {
        font-size: 17px;
        background-color: transparent;
        border: 0px;
        margin: 0px;
        padding: 0px;
        width: 100%;
        text-overflow: ellipsis;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .search_results {
    background-color: #ffffff;
    border: 1px solid #ebebeb;
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 15px 46px -10px rgba(26,26,29,0.3);
    margin: 0px;
    overflow: scroll;
    padding: 0px;
    padding-top: 8px;
    position: absolute;
    height: 310px;
    width: 87%;

    .result_item {
      cursor: pointer;
      list-style-type: none;
      display: flex;
      padding-left: 0px;
      padding: 14px;

      .item_icon {
          margin-right: 14px;
      }

      .item_text {
        overflow-wrap: break-word;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.28571em;
        margin: 0px;
        flex: 1;

        p {
            margin: 0;
            color: #717171;
            line-height: 20px;
            max-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-transform: capitalize;
        }

        .item_id {
            font-size: 1em;

        .item_name {
            font-size: 1em;
        }

        .item_coordinates {
            font-size: 1em;
        }

        .item_type {
            font-size: 1em;
        }

        .item_category {
            font-size: 1em;
        }
      }
    }
  }
`;
