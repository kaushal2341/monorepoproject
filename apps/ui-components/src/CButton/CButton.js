import React, { memo } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
const CButton = props => {
    const {
        id,
        name,
        children,
        variant,
        active,
        classes,
        disabled,
        as,
        onClickHandler,
        href,
        size,
        type,
        block,
        bsPrefix
    } = props;
    return (
        <>
            <Button
                id={id}
                children={children}
                variant={variant}
                active={active}
                className={classes}
                disabled={disabled}
                as={as}
                onClick={onClickHandler}
                href={href}
                size={size}
                type={type}
                block={block}
                bsPrefix={bsPrefix}
            >
                {name}
            </Button>
        </>
    )
};


CButton.defaultProps = {
    name: 'Save',
    type: 'button',
    onClickHandler: () => {}
};

CButton.propTypes = {
    id: PropTypes.string.isRequired || PropTypes.number.isRequired,
    children: PropTypes.element,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    variant: PropTypes.string,
    active: PropTypes.bool,
    classes: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    bsPrefix: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool
};

export default memo(CButton);