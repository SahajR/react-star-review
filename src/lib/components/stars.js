import React from 'react';

export default class Rating extends React.Component {

    state = {
        hoveredOn: 0,
        rating: this.props.rating
    }

    static defaultProps = {
        size: 30,
        rating: 4.25,
        count: 5,
        borderThickness: 2,
        filledColor: '#FFC82C',
        clearColor: '#FFF',
        borderColor: '#E4B50E',
        hoverColor: '#FBDC84',
        interactive: false
    }

    componentDidMount() {
        if (this.props.interactive) {
            if (typeof this.props.onRatingChanged !== 'function') {
                throw new Error('An interactive rating needs an `onRatingChanged` prop.');
            }
            if (!this.props.borderThickness) {
                console.warn('Interactive ratings with no border is bad UX. Consider adding a tiny border.');
            }
        }
    }

    onHover = (n) => () => {
        this.setState(() => ({
            hoveredOn: n
        }));
    }

    onHoverExit = () => {
        this.setState(() => ({
            hoveredOn: 0
        }));
    }

    setRating = (n) => () => {
        this.setState(() => ({
            rating: n
        }), () => {
            if (typeof this.props.onRatingChanged === 'function') {
                this.props.onRatingChanged(this.state.rating);
            }
        });
    }

    ratingContainerStyle = {
        display: 'flex',
        flexWrap: 'nowrap',
        ...this.props.style
    }

    starContainerStyle = (starNumber) => {
        return {
            ...this.getDivStyle(starNumber),
            width: this.props.size,
            height: this.props.size,
            background: this.props.borderColor,
            position: 'relative'
        };
    }

    getDivStyle = (starNumber) => {
        const {
          borderThickness,
          size,
          clearColor,
          filledColor
        } = this.props;
        const { rating } = this.state;
        let fillRatio = starNumber < rating ? 1 : 0;

        if (starNumber === Math.ceil(rating)) {
            const fraction = rating % 1;

            fillRatio = fraction !== 0 ? fraction : 1;
        }
        const fillPercentage = 100 * (fillRatio);

        let hoverStyle = {};

        if (this.state.hoveredOn) {
            if (this.state.hoveredOn >= starNumber) {
                hoverStyle = {
                    background: this.props.hoverColor,
                    cursor: 'pointer'
                };
            }
        }

        return {
            position: 'absolute',
            top: borderThickness,
            left: borderThickness,
            background: `linear-gradient(
              90deg,
              ${filledColor} 0%,
              ${filledColor} ${fillPercentage}%,
              ${clearColor} ${fillPercentage}%,
              ${clearColor} 100%
            )`,
            height: size - (2 * borderThickness),
            width: size - (2 * borderThickness),
            clipPath: 'polygon(47.553% 75.000%, 18.164% 90.451%, 23.776% 57.725%, 0.000% 34.549%, 32.858% 29.775%, 47.553% 0.000%, 62.247% 29.775%, 95.106% 34.549%, 71.329% 57.725%, 76.942% 90.451%)',
            ...hoverStyle
        };
    }

    renderStars = () => {
        const count = this.props.count;
        const starElements = [];

        for (let i = 1; i <= count; i++) {
            const eventHandlers = {
                onMouseEnter: this.onHover(i),
                onMouseLeave: this.onHoverExit,
                onClick: this.setRating(i)
            };
            const interactions = this.props.interactive ? eventHandlers : {};

            starElements.push(
              <div style={ this.starContainerStyle(i) } {...interactions} key={i}>
                <div style={ this.getDivStyle(i) }>
                </div>
              </div>
            );
        }

        return starElements;
    }

    render() {
        return (
          <div style={this.ratingContainerStyle}>
              { this.renderStars() }
          </div>
        );
    }
}
