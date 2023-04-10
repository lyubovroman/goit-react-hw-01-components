import PropTypes from 'prop-types';
import { StatisticsSection, StatTitle, StatList ,StatItem , LabelText, PercentageText}  from './Statistics.styled';

export default function Statistics({ title, stats}) {
    return (
        <StatisticsSection>
  <StatTitle>{title}</StatTitle>

        <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} >
            <LabelText>{label}</LabelText>
            <PercentageText>{percentage}%</PercentageText>
          </StatItem>
        ))}
      </StatList>
</StatisticsSection>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};