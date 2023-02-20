export function getDateDiff(from, to)
{
    const oldDate = new Date(from);
    const today = to ? new Date(to) : Date.now();
    const differenceInMs = today - oldDate;

    const days = differenceInMs / (1000 * 60 * 60 * 24);

    const totalMonths = Math.floor(days / 30);
    const months = totalMonths % 12;
    const years = Math.floor(totalMonths / 12);

    return {
        days,
        months,
        years
    }
}

export function dateToWord(dateString)
{
    if(!dateString) return;
    const date = new Date(dateString);
    
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function getWorkDuration(startDate, endDate)
{
    const diff = getDateDiff(startDate, endDate);
    let duration = '';
    if(diff.years > 0) duration += diff.years + ' years';
    if(diff.years > 0 && diff.months > 0) duration += ' and ';
    if(diff.months > 0) duration += diff.months + ' months';

    return `${dateToWord(startDate)} - ${dateToWord(endDate) || 'present'} · ${duration}`;
}
