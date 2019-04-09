from random import randint
import math
import matplotlib.pyplot as plt
import seaborn as sns

def run_game():
    return randint(0,100)

def simulation(number_of_games):

    data = []

    for i in range(number_of_games):
        data.append(run_game())

        ave = sum(data)/len(data)

    sd = 0

    top = 0

    for i in range(len(data)):
        top += (data[i]-ave)**2

    sd = top/(len(data)-1)

    sd = math.sqrt(sd)

    return [ave,sd,data]

# print(sd)

# print("The average is: {} The std is: {}".format(ave, sd))
def visualize(data):
    sns.set()
    f, ax = plt.subplots(1, 1)

    for i in range(len(data)):
        sns.distplot(data[i][2], kde_kws={"label":"Games: {} Ave: {}".format(len(data[i][2]),data[i][0])})


    ax.set(title='Ave Games Played')

    plt.xlabel('Number Of Rolls')
    plt.ylabel('Frequency')
    plt.show()

def main():
    big_data = []
    number_of_games = [10,20,30,40,500]
    for i in range(len(number_of_games)):
        big_data.append(simulation(number_of_games[i]))

    # print(big_data)

    visualize(big_data)

main()

# sns.set(color_codes=True)

# keys = list(data.keys())

# print(keys)
# x = np.random.normal(size=100)
# sns.distplot(x)
# print(x)

# my_labels = []
#
# for i in range(len(keys)):
#     temp = data[keys[i]][1]
#     # print(temp)
#
#     text = "G.C.: {} Ave: {}".format(keys[i], str(round(data[keys[i]][0],3)))
#
#     sns.distplot(temp, kde_kws={"label":text})
#     my_labels.append(str(round(data[keys[i]][0],3)))

# print(my_labels)
