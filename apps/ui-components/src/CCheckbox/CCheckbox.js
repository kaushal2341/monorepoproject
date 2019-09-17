import React, {memo} from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const CCheckbox = props => {
    const {
        id,
        label,
        ref,
        children,
        className,
        custom,
        disabled,
        feedback,
        inline,
        isInvalid,
        isValid,
        title,
        type,
        bsPrefix,
        onChange
    } = props;

    return (
        <Form.Check
            test-id="c-checkbox"
            id={label.concat('_').concat(id)}
            label={label}
            type={type}
            _ref={ref}
            children={children}
            className={className}
            custom={custom}
            disabled={disabled}
            feedback={feedback}
            inline={inline}
            isInvalid={isInvalid}
            isValid={isValid}
            title={title}
            bsPrefix={bsPrefix}
            onChange={onChange}
        />
    );
};

CCheckbox.defaultProps = {
    type: 'checkbox',
    onChange: () => {
    }
};

CCheckbox.propTypes = {
    id: PropTypes.string.isRequired, // must be unique
    label: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.node
    ]),
    _ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(Element)})
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    custom: PropTypes.bool,
    disabled: PropTypes.bool,
    feedback: PropTypes.node,
    inline: PropTypes.bool,
    isInvalid: PropTypes.bool,
    isValid: PropTypes.bool,
    title: PropTypes.string,
    bsPrefix: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default memo(CCheckbox);
