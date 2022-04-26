import styled from 'styled-components';



export const ConteinerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 48px;

    .wrapper-progress {
        width: 500px;
        position: relative;
        
        & .progress {
            width: 100%;
            height: 6px;
            position: absolute;
            top: 10px;
            z-index: 0;
        }

        & .mark {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: none;
            position: absolute;

            & span {
                height: 19px;
                width: 19px;
                background: #e9ecef;
                border-radius: 50%;
                margin: 0 -5px;
                z-index: 1;
            }

            & span.active {
                background: rgba(97, 218, 251, 1);
            }

        }
    }


    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .cep {
        display: flex;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;

        margin-top: 65px;

        & input {
            width: 100%;
            max-width: 286px;

            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            border: none;
            outline: none;

            padding: 12px 17px;
        }

        & button {
            border: none;
            outline: none;
            padding-inline: 15px;
            background: transparent;
        }
    }

    .form-control {
        & input, textarea {
            width: 613px;
            background: transparent;

            font-size: 20px;
            font-weight: 400;
            border: none;
            outline: none;

            padding-inline: 5px;
        }

        & textarea {
            resize: none;
        }
    }

    .btn-wrapper {
        display: flex;
        justify-content: space-between;
    }

    .message {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 65px;

        & h4 {
            font-size: 32px;
            font-weight: 600;
            line-height: 39px;
            letter-spacing: 0em;
            text-align: left;
        }

        & p {
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
            letter-spacing: 0em;
            text-align: center;
        }
    }
`;