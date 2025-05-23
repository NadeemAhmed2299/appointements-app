'use client';

import { createTheme } from "@mui/material/styles";
import '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
    shape: {
        borderRadius: 8,
    },
    palette: {
        primary: {
            main: '#7F56D9',
        },
        secondary: {
            main: '#dc004e',
        },
        success: {
            main: '#00B69B',
        },
        error: {
            main: '#FF0000'
        },
        warning: {
            main: '#FEC53D',    
        },
        info: {
            main: '#5088FF'
        }, 
        background: {
            default: '#f5f5f5',
        }
    },
    typography: {
        fontFamily: '"Nunito Sans", sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 700,
        },
        h4: {
            fontSize: '1.25rem',
            fontWeight: 700,
        },
        h5: {
            fontSize: '1.1rem',
            fontWeight: 700,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: 'rgba(0, 0, 0, 0.87)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                },
            },
            defaultProps: {
                elevation: 0,
            }
        },
        MuiButton: {
            defaultProps: {
                size: 'small',
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontFamily: '"Nunito Sans", sans-serif',
                    fontWeight: 700
                },
                sizeSmall: {
                    fontSize: '0.875rem',
                    padding: '4px 12px',
                },
                sizeMedium: {
                    fontSize: '1rem',
                    padding: '8px 24px',
                },
                sizeLarge: {
                    fontSize: '1.125rem',
                    padding: '12px 32px',
                },
                text: {
                    backgroundColor: 'transparent',
                    fontWeight: 500,
                    padding: 0,
                    minWidth: 0,
                    '&.MuiButton-text': {
                        padding: 0,
                    },
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                    },
                },
            },
        },
        MuiCard: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    paddingLeft: '12px',
                    paddingRight: '12px',
                },
                label: {
                    color: '#ffffff',
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    border: 'none',
                },
                columnHeader: {
                    backgroundColor: '#F1F4F9',
                    '&.MuiDataGrid-columnHeader': {
                        border: 'none',
                        outline: 'none',
                    },
                    '&.MuiDataGrid-columnHeader:focus': {
                        outline: 'none',
                    },
                    '&.MuiDataGrid-columnHeader:focus-within': {
                        outline: 'none',
                    },
                },
                columnHeaderTitle: {
                    fontWeight: 'bold',
                },
                row: {
                    '&:hover': {
                        backgroundColor: '#f9f9f9',
                    },
                },
                cell: {
                    '&.MuiDataGrid-cell--withRightBorder': {
                        borderRight: 'none',
                    },
                    '&.MuiDataGrid-cell:focus': {
                        outline: 'none',
                    },
                    '&.MuiDataGrid-cell:focus-within': {
                        outline: 'none',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                    marginRight: 0
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'small' && {
                        fontSize: '0.875rem',
                        height: 44,
                    }),
                    ...(ownerState.size === 'medium' && {
                        fontSize: '1rem',
                        height: 56,
                    }),
                }),
                input: ({ ownerState }) => ({
                    ...(ownerState.size === 'small' && {
                        padding: '10px 12px',
                    }),
                    ...(ownerState.size === 'medium' && {
                        padding: '12px 14px',
                    }),
                }),
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    backgroundColor: '#e0e0e0', // gray background
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiPopover: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiMenu: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F1F4F9',
                    fontWeight: "bold"
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
            },
        },
    },
});

export default theme;
