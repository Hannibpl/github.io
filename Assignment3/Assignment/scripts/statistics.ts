"use strict";

interface VisitorStats {
    date: string;
    visits: number;
    signups: number;
}

// Fetching the visitors statistics data
async function fetchVisitorStats(): Promise<VisitorStats[] | null> {
    try {
        const response = await fetch('data/visitorStats.json');
        if (!response.ok) throw new Error('Error fetching visitorStats');
        const data: VisitorStats[] = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Creating a chart that is using the data
async function createChart(): Promise<void> {
    const data = await fetchVisitorStats();

    if (!data) return; // if the data fetch fails

    const labels: string[] = data.map(item => item.date);
    const visits: number[] = data.map(item => item.visits);
    const signups: number[] = data.map(item => item.signups);

    // setting up the Chart
    const ctx = document.getElementById('visitorStats')as HTMLCanvasElement;
    const chartContext = ctx.getContext('2d');
    if (!chartContext) {
        console.error('No charts loaded');
        return;
    }

    new Chart(chartContext, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'The Amount of Visits',
                    data: visits,
                    borderColor: 'orange',
                    fill: false,
                },
                {
                    label: 'Sign-ups',
                    data: signups,
                    borderColor: 'blue',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x:{
                    title: {
                        display: true,
                        text: 'Date of Visits',
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Count of Visits',
                    }
                }
            }
        }
    });
}

// Initialize the page chart
document.addEventListener('DOMContentLoaded', () => {
    createChart();
});