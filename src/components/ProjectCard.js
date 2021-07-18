import React from 'react';
import firstImage from '../assets/1.png';
import secondImage from '../assets/2.png';
import thirdImage from '../assets/4.png';
import fourthImage from '../assets/6.png';
import { Grid, Image, Container, Card, Button } from 'semantic-ui-react'
export default function ProjectCard({theme}) {

    const scrollToTop = () => {
        window.scroll(0,0)
    }

    return (
        <div className="project-container">
            <div className="floating-button">
                <Button 
                size='big' 
                color="red" 
                circular icon='arrow up' 
                onClick={scrollToTop}
                />
            </div>
            <Container textAlign='center'>
                <h1 className={theme === 'light' ? "project-header" : "project-header-dark"}>Some of my top projects</h1>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Card centered className="project-card">
                            <Image className="project-image" src={firstImage} wrapped ui={false} />
                            <Card.Content className="card-content">
                                <p className="card-header">Covid-19 Tracker</p>
                                <p className="card-description">
                                    An application 
                                    to shows number 
                                    of Infected, Recovered 
                                    and deceased Covid-19 
                                    patients across the World 
                                    and Countrywise!</p>

                            <div className="button-container">
                                <Button 
                                onClick={() => window.location.href = "https://nishant-666.github.io/Covid-19-Tracker/"}
                                secondary 
                                className="links-button">See More</Button>
                            </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered className="project-card">
                            <Image className="project-image" src={secondImage} wrapped ui={false} />
                            <Card.Content className="card-content">
                                <p className="card-header">Covid-19 Tracker</p>
                                <p className="card-description">
                                    An application 
                                    to shows number 
                                    of Infected, Recovered 
                                    and deceased Covid-19 
                                    patients across the World 
                                    and Countrywise!</p>

                            <div className="button-container">
                                <Button 
                                onClick={() => 
                                    window.location.href = 
                                    "https://nishant-666.github.io/Expenses-Calculator/"
                                }
                                secondary 
                                className="links-button">See More</Button>
                            </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered className="project-card">
                            <Image className="project-image" src={thirdImage} wrapped ui={false} />
                            <Card.Content className="card-content">
                                <p className="card-header">Covid-19 Tracker</p>
                                <p className="card-description">
                                    An application 
                                    to shows number 
                                    of Infected, Recovered 
                                    and deceased Covid-19 
                                    patients across the World 
                                    and Countrywise!</p>

                            <div className="button-container">
                                <Button 
                                secondary 
                                onClick={() => 
                                    window.location.href = 
                                    "https://nishant-666.github.io/Expenses-Calculator/"
                                }
                                className="links-button">See More</Button>
                            </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered className="project-card">
                            <Image className="project-image" src={fourthImage} wrapped ui={false} />
                            <Card.Content className="card-content"> 
                                <p className="card-header">Covid-19 Tracker</p>
                                <p className="card-description">
                                    An application 
                                    to shows number 
                                    of Infected, Recovered 
                                    and deceased Covid-19 
                                    patients across the World 
                                    and Countrywise!</p>

                            <div className="button-container">
                                <Button 
                                secondary 
                                onClick={() => 
                                    window.location.href = 
                                    "https://nishant-666.github.io/Expenses-Calculator/"
                                }
                                className="links-button">See More</Button>
                            </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
