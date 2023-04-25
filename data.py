import csv
import json

#H-1Bのデータのみ
#---------------------2022---------------------------------------------------------------
# title_totals2022 = {}
# status_totals2022 = {}
# emp_totals2022 = {}
# state_totals2022 = {}
# all_companies = []
# all_positions = []
# line_count2022 = 0
# with open('LCA_FY_2022.csv') as csvfile:
#     csv_reader = csv.DictReader(csvfile)

#     for row in csv_reader:
#             # print(row['SOC_Title'])
#         if (row['Visa_Class']=='H-1B'):
#             # line_count2022+=1
#             # key_status = row['Case_Status']
#             # if key_status not in status_totals2022:
#             #     status_totals2022[key_status] = 0
#             # status_totals2022[key_status]+=1

#             if (row['Case_Status']=='Certified') or (row['Case_Status']=='Certified - Withdrawn'):
     
#                 key_employer = row['Employer_Name']
#                 if key_employer not in emp_totals2022:
#                     emp_totals2022[key_employer] = 0
#                 emp_totals2022[key_employer]+=1

                # key_title = row['SOC_Title'].split(',')[0]
                # if key_title not in title_totals2022:
                #     title_totals2022[key_title] = 0
                # title_totals2022[key_title]+=1
                # line_count2022 += 1
                # sort2022 = sorted(title_totals2022.items(), key=lambda x:x[1], reverse=True)

                # key_state = row['Worksite'].split(',')[-1]
                # if key_state not in state_totals2022:
                #     state_totals2022[key_state] = 0
                # state_totals2022[key_state]+=1
                # sort2022 = sorted(state_totals2022.items(), key=lambda x:x[1], reverse=True)
                # line_count2022 +=1

# fields = ['position','value']
# with open("all_positions.csv", "w") as outfile:
#     write = csv.writer(outfile)
#     write.writerows(fields)
#     write.writerows(all_positions)
                
# sorted2022 = sorted(emp_totals2022.items(), key=lambda x:x[1], reverse=True)
# json_data = json.dumps(sorted2022)

# with open("emp_totals2022.json", "w") as outfile:
#     outfile.write(json_data)

# print(json.dumps(emp_totals2022, indent=4))    
# print(json.dumps(title_totals2022))  
# print(json.dumps(sort2022, indent=4))    
# print('2022 Total Count: ',line_count2022) 
#all: 626084 / only H-1B: 610882 / 597091


#---------------------2021---------------------------------------------------------------
# title_totals2021 = {}
# status_totals2021 = {}
# emp_totals2021 = {}
# state_totals2021 = {}
# line_count2021 = 0
# with open('LCA_FY_2021.csv') as csvfile:
#     csv_reader = csv.DictReader(csvfile)

#     for row in csv_reader:
#         # print(row['SOC_Title'])
#         if (row['Visa_Class']=='H-1B'):
            # line_count2021+=1
            # key_status = row['Case_Status']
            # if key_status not in status_totals2021:
            #     status_totals2021[key_status] = 0
            # status_totals2021[key_status]+=1

            # if (row['Case_Status']=='Certified') or (row['Case_Status']=='Certified - Withdrawn'):
                
            #     key_employer = row['Employer_Name']
            #     if key_employer not in emp_totals2021:
            #         emp_totals2021[key_employer] = 0
            #     emp_totals2021[key_employer]+=1
            #     line_count2021+=1

                # key_title = row['SOC_Title'].split(',')[0]
                # if key_title not in title_totals2021:
                #     title_totals2021[key_title] = 0
                # title_totals2021[key_title]+=1
                # line_count2021 += 1
                # sort2021 = sorted(title_totals2021.items(), key=lambda x:x[1], reverse=True)
                

                # key_state = row['Worksite'].split(',')[-1]
                # if key_state not in state_totals2021:
                #     state_totals2021[key_state] = 0
                # state_totals2021[key_state]+=1
                # sort2021 = sorted(state_totals2021.items(), key=lambda x:x[1], reverse=True)
                # line_count2021 += 1
                
# sorted2021 = sorted(emp_totals2021.items(), key=lambda x:x[1], reverse=True)
# json_data = json.dumps(sorted2021)

# with open("emp_totals2021.json", "w") as outfile:
#     outfile.write(json_data)

# print(json.dumps(emp_totals2021, indent=4))  
# print(json.dumps(title_totals2021))  
# print(json.dumps(sort2021))   
# print('2021 Total Count: ',line_count2021) 
# 626084 / 803733 / 784481

#---------------------2020---------------------------------------------------------------
title_totals2020 = {}
status_totals2020 = {}
emp_totals2020 = {}
state_totals2020 = {}
line_count2020 = 0
with open('LCA_FY_2020.csv') as csvfile:
    csv_reader = csv.DictReader(csvfile)

    for row in csv_reader:
        # print(row['SOC_Title'])
        if (row['Visa_Class']=='H-1B'):
#             # line_count2020+=1
#             # key_status = row['Case_Status']
#             # if key_status not in status_totals2020:
#             #     status_totals2020[key_status] = 0
#             # status_totals2020[key_status]+=1

            if (row['Case_Status']=='Certified') or (row['Case_Status']=='Certified - Withdrawn'):
                
                key_employer = row['Employer_Name']
                if key_employer not in emp_totals2020:
                    emp_totals2020[key_employer] = 0
                emp_totals2020[key_employer]+=1

#                 key_title = row['SOC_Title'].split(',')[0]
#                 if key_title not in title_totals2020:
#                     title_totals2020[key_title] = 0
#                 title_totals2020[key_title]+=1
#                 line_count2020 += 1
#                 sort2020 = sorted(title_totals2020.items(), key=lambda x:x[1], reverse=True)


#                 # key_state = row['Worksite'].split(',')[-1]
#                 # if key_state not in state_totals2020:
#                 #     state_totals2020[key_state] = 0
#                 # state_totals2020[key_state]+=1
#                 # sort2020 = sorted(state_totals2020.items(), key=lambda x:x[1], reverse=True)
#                 # line_count2020 += 1

sorted2020 = sorted(emp_totals2020.items(), key=lambda x:x[1], reverse=True)
json_data = json.dumps(sorted2020)

with open("emp_totals2020.json", "w") as outfile:
    outfile.write(json_data)

# # print(json.dumps(emp_totals2020, indent=4))
# # print(json.dumps(title_totals2020))  
# # print(json.dumps(sort2020))
# # print('2020 Total Count: ', line_count2020) 
# #626084 / 564251 / 550138


# #---------------------2019---------------------------------------------------------------
# title_totals2019 = {}
# status_totals2019 = {}
# emp_totals2019 = {}
# state_totals2019 = {}
# line_count2019 = 0
# with open('LCA_FY_2019U.csv') as csvfile:
#     csv_reader = csv.DictReader(csvfile)
#     for row in csv_reader:
#         # print(row['SOC_Title'])
#         if (row['Visa_Class']=='H-1B'):
#             # line_count2019+=1
#             # key_status = row['Case_Status']
#             # if key_status not in status_totals2019:
#             #     status_totals2019[key_status] = 0
#             # status_totals2019[key_status]+=1

#             if (row['Case_Status']=='CERTIFIED') or (row['Case_Status']=='CERTIFIED-WITHDRAWN'):

# #                 key_employer = row['Employer_Name']
# #                 if key_employer not in emp_totals2019:
# #                     emp_totals2019[key_employer] = 0
# #                 emp_totals2019[key_employer]+=1

#                 # key_title = row['SOC_Title'].split(',')[0]
#                 # if key_title not in title_totals2019:
#                 #     title_totals2019[key_title] = 0
#                 # title_totals2019[key_title]+=1
#                 # sort2019 = sorted(title_totals2019.items(), key=lambda x:x[1], reverse=True)
#                 # all_positions.extend(sort2019)                

#                     # key_state = row['Worksite'].split(',')[-1]
#                     # if key_state not in state_totals2019:
#                     #     state_totals2019[key_state] = 0
#                     # state_totals2019[key_state]+=1
#                     # sort2019 = sorted(state_totals2019.items(), key=lambda x:x[1], reverse=True)
#                     # line_count2019+=1
#                     break
# # sorted2019 = sorted(title_totals2019.items(), key=lambda x:x[1], reverse=True)
# # json_data = json.dumps(sorted2019, indent=4)

# # with open("title_totals2019.json", "w") as outfile:
# #     outfile.write(json_data)

# # print(json.dumps(emp_totals2019, indent=4)) 
# # print(json.dumps(title_totals2019))  
# # print(json.dumps(sort2019))    
# # print('2019 Total Count: ', line_count2019) 
# # 2019 Total Count:  626084 / 649083

# #---------------------2018---------------------------------------------------------------
# title_totals2018 = {}
# status_totals2018 = {}
# emp_totals2018 = {}
# state_totals2018 = {}
# line_count2018 = 0
# with open('LCA_FY_2018.csv') as csvfile:
#     csv_reader = csv.DictReader(csvfile)
#     for row in csv_reader:
#         # print(row['SOC_Title'])
#         if (row['Visa_Class']=='H-1B'):
#             # line_count2018+=1
#             # key_status = row['Case_Status']
#             # if key_status not in status_totals2018:
#             #     status_totals2018[key_status] = 0
#             # status_totals2018[key_status]+=1

#             if (row['Case_Status']=='CERTIFIED') or (row['Case_Status']=='CERTIFIED-WITHDRAWN'):
                
#                 # key_employer = row['Employer_Name']
#                 # if key_employer not in emp_totals2018:
#                 #     emp_totals2018[key_employer] = 0
#                 # emp_totals2018[key_employer]+=1

#                 # key_title = row['SOC_Title'].split(',')[0]
#                 # if key_title not in title_totals2018:
#                 #     title_totals2018[key_title] = 0
#                 # title_totals2018[key_title]+=1
#                 # sort2018 = sorted(title_totals2018.items(), key=lambda x:x[1], reverse=True)
#                 # all_positions.extend(sort2018)

#                 # key_state = row['Worksite'].split(',')[-1]
#                 # if key_state not in state_totals2018:
#                 #     state_totals2018[key_state] = 0
#                 # state_totals2018[key_state]+=1
#                 # sort2018 = sorted(state_totals2018.items(), key=lambda x:x[1], reverse=True)
#                 # line_count2018+=1
#                 break
# # sorted2018 = sorted(title_totals2018.items(), key=lambda x:x[1], reverse=True)
# # json_data = json.dumps(sorted2018, indent=4)

# # with open("title_totals2018.json", "w") as outfile:
# #     outfile.write(json_data)

# # print(json.dumps(emp_totals2018, indent=4))   
# # print(json.dumps(title_totals2018))  
# # print(json.dumps(status_totals2018, indent=4))   
# # print(json.dumps(sort2018))  
# # print('2018 Total Count: ', line_count2018) 
# # 2018 Total Count:  626084 / 639519



# #---------------------2017---------------------------------------------------------------
# title_totals2017 = {}
# status_totals2017 = {}
# emp_totals2017 = {}
# state_totals2017 = {}
# line_count2017 = 0
# with open('LCA_FY_2017.csv') as csvfile:
#     csv_reader = csv.DictReader(csvfile)
#     for row in csv_reader:
#         # print(row['SOC_Title'])
#         if (row['Visa_Class']=='H-1B'):
#             # line_count2017+=1
#             # key_status = row['Case_Status']
#             # if key_status not in status_totals2017:
#             #     status_totals2017[key_status] = 0
#             # status_totals2017[key_status]+=1

#             if (row['Case_Status']=='CERTIFIED') or (row['Case_Status']=='CERTIFIED-WITHDRAWN'):

#                 # key_employer = row['Employer_Name']
#                 # if key_employer not in emp_totals2017:
#                 #     emp_totals2017[key_employer] = 0
#                 # emp_totals2017[key_employer]+=1

#                 # key_title = row['SOC_Title'].split(',')[0]
#                 # if key_title not in title_totals2017:
#                 #     title_totals2017[key_title] = 0
#                 # title_totals2017[key_title]+=1
#                 # sort2017 = sorted(title_totals2017.items(), key=lambda x:x[1], reverse=True)
#                 # all_positions.extend(sort2017)

#                 # key_state = row['Worksite'].split(',')[-1]
#                 # if key_state not in state_totals2017:
#                 #     state_totals2017[key_state] = 0
#                 # state_totals2017[key_state]+=1
#                 # sort2017 = sorted(state_totals2017.items(), key=lambda x:x[1], reverse=True)
#                 # line_count2017+=1
#                 break
# # sorted2017 = sorted(title_totals2017.items(), key=lambda x:x[1], reverse=True)
# # json_data = json.dumps(sorted2017, indent=4)

# # with open("title_totals2017.json", "w") as outfile:
# #     outfile.write(json_data)

# # print(json.dumps(status_totals2017, indent=4))
# # print(json.dumps(sort2017))
# # print('2017 Total Count: ', line_count2017) 
# # 2017 Total Count:  626084 / 610304


