export const container = {
    padding: '20px',
};

export const resultOutput = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'min-content',
    padding: '0 50px',
    color: '#2ab060',
    border: '10px solid #2ab060',
    borderRadius: '20px',
    fontSize: '180px',
    margin: '50px auto',
};

export const btnActions = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '20px',
} as React.CSSProperties;

export const btn = {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #2ab060 !important',
    borderRadius: '10px !important',
    backgroundColor: 'transparent !important',
    color: '#2ab060 !important',
    padding: '20px !important',
    margin: '10px !important',

    '&:hover': {
        backgroundColor: '#2ab060 !important',
        color: 'white !important',
    },
};