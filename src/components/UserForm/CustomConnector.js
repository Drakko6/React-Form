import { withStyles } from '@material-ui/core/styles';

import StepConnector from '@material-ui/core/StepConnector';

export const CustomConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#000033',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#000033',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 5,
        borderRadius: 5,
    },
})(StepConnector);
